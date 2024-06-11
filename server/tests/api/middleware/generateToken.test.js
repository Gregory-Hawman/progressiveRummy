const { generateToken } = require('../../../api/middleware/auth_middleware');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../../api/vars');

describe('generateToken', () => {
    it('should generate a valid JWT token', () => {
        const user = { id: 1, email: 'test@example.com', name: 'Test User', username: 'testuser' };
        const token = generateToken(user);
        const decoded = jwt.verify(token, jwtSecret);
        expect(decoded.email).toBe(user.email);
        expect(decoded.name).toBe(user.name);
        expect(decoded.subject).toBe(user.id);
        expect(decoded.username).toBe(user.username);
    });
});