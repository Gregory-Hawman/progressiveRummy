const { authenticate } = require('../../../api/middleware/auth_middleware');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('authenticate', () => {
    it('should call next() for a valid token', () => {
        const req = {
            headers: {
                authorization: 'Bearer validToken'
            }
        };
        const res = {};
        const next = jest.fn();
        jwt.verify.mockImplementation((token, secret, callback) => callback(null, { userId: 1 }));

        authenticate(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    it('should return 401 for an invalid token', () => {
        const req = {
            headers: {
                authorization: 'Bearer invalidToken'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        const next = jest.fn();
        jwt.verify.mockImplementation((token, secret, callback) => callback(new Error('Invalid token'), null));

        authenticate(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Token' });
    });

    it('should return 401 if no token is provided', () => {
        const req = { headers: {} };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
        const next = jest.fn();

        authenticate(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Please provide credentials to access this resource' });
    });
});
