import jackOfSpades from '../assets/jack_spades.png';
import jackOfHearts from '../assets/jack_hearts.png';
import jackOfClubs from '../assets/jack_clubs.png';
import jackOfDiamonds from '../assets/jack_diamonds.png';
import queenOfSpades from '../assets/queen_spades.png';
import queenOfHearts from '../assets/queen_hearts.png';
import queenOfClubs from '../assets/queen_clubs.png';
import queenOfDiamonds from '../assets/queen_diamonds.png';
import kingOfSpades from '../assets/king_spades.png';
import kingOfHearts from '../assets/king_hearts.png';
import kingOfClubs from '../assets/king_clubs.png';
import kingOfDiamonds from '../assets/king_diamonds.png';
import redJoker from '../assets/joker_red.png';
import blackJoker from '../assets/joker_black.png';

export default function CardFace({value, suit}) {
    let suitImg;
    let red = false;
    let isJoker = false

    if (suit === 'hearts') {
        suitImg = '♥️'
        red = true
    } else if (suit === 'diamonds') {
        suitImg = '♦️'
        red = true
    } else if (suit === 'clubs') {
        suitImg = '♣️'
        red = false
    } else if (suit === 'spades') {
        suitImg = '♠️'
        red = false
    } else if (suit === 'joker-red') {
        red = true
        isJoker = true
    } else if (suit === 'joker-black') {
        red = false
        isJoker = true
    }

    function jokerText(){
        return (
            <div className="joker-text">
                <span>J</span>
                <span>o</span>
                <span>k</span>
                <span>e</span>
                <span>r</span>
            </div>
        )
    }
    
    return (
        <div className={red? 'card-face-red': 'card-face'}>
            <div className="left">
                {isJoker ? 
                    jokerText()
                    : 
                    <div>{value}</div>
                }
                <div>{suitImg}</div>
            </div>
            <div className="center">
                {renderCardSuits(value, suit)}
            </div>
            
            <div className="right rotate-180">
                {isJoker ? 
                    jokerText()
                    : 
                    <div>{value}</div>
                }
                <div>{suitImg}</div>
            </div>
        </div>
    )
}

function renderCardSuits(value, suit) {
    // Define suit symbols
    const suits = {
        'clubs': <div className="suit">♣</div>,
        'diamonds': <div className="suit">♦</div>,
        'hearts': <div className="suit">♥</div>,
        'spades': <div className="suit">♠</div>
    };

   const faceCardImages = {
        'J': { // Jacks
            'spades': <img src={jackOfSpades} alt="Jack of Spades" />,
            'hearts': <img src={jackOfHearts} alt="Jack of Hearts" />,
            'clubs': <img src={jackOfClubs} alt="Jack of Clubs" />,
            'diamonds': <img src={jackOfDiamonds} alt="Jack of Diamonds" />,
        },
        'Q': { // Queens
            'spades': <img src={queenOfSpades} alt="Queen of Spades" />,
            'hearts': <img src={queenOfHearts} alt="Queen of Hearts" />,
            'clubs': <img src={queenOfClubs} alt="Queen of Clubs" />,
            'diamonds': <img src={queenOfDiamonds} alt="Queen of Diamonds" />,
        },
        'K': { // Kings
            'spades': <img src={kingOfSpades} alt="King of Spades" />,
            'hearts': <img src={kingOfHearts} alt="King of Hearts" />,
            'clubs': <img src={kingOfClubs} alt="King of Clubs" />,
            'diamonds': <img src={kingOfDiamonds} alt="King of Diamonds" />,
        },
        'Joker': { // Jokers
            'joker-red': <img src={redJoker} alt="Red Joker" />,
            'joker-black': <img src={blackJoker} alt="Black Joker" />
        }
    };

     // Check if the card is a face card and render its image if so
     if (value === 'J' || value === 'Q' || value === 'K' || value === 'Joker') { // Adjust this condition if including Jokers
        const faceCardImage = faceCardImages[value][suit.toLowerCase()];
        return faceCardImage ? <div className="face-card-image">{faceCardImage}</div> : null;
    }

    // Get the suit symbol
    const suitSymbol = suits[suit.toLowerCase()];

    // Define the layout for the suits based on the card value
    const layoutPatterns = {
        'A': [0, 1, 0], // Aces: 1 suit in the center
        2: [0, 2, 0], // 2s: 2 suits in the center
        3: [0, 3, 0], // 3s: 3 suits in the center
        4: [2, 0, 2], // 4s: 2 suits on the left, 2 on the right
        5: [2, 1, 2], // 5s: 2 suits on the left, 1 in the center, 2 on the right
        6: [3, 0, 3], // 6s: 2 suits on the left, 2 in the center, 2 on the right
        7: [3, 1, 3], // 7s: 3 suits on the left, 1 in the center, 3 on the right
        8: [3, 2, 3], // 8s: 3 suits on the left, 2 in the middle, 3 on the right
        9: [4, 1, 4], // 9s: 4 suits on the left, 1 in the center, 4 on the right
        10: [4, 2, 4], // 10s: 4 suits on the left, 2 in the middle, 4 on the right
        // Add more patterns for other card values as needed
    };

    // Get the layout pattern for the given card value
    const pattern = layoutPatterns[value];

    // Generate the layout based on the pattern
    if (value < 9) {
        if (pattern) {
            return (
                <div className="center">
                    <div className="center-left">{Array(pattern[0]).fill(suitSymbol)}</div>
                    <div className="center-center">{Array(pattern[1]).fill(suitSymbol)}</div>
                    <div className="center-right">{Array(pattern[2]).fill(suitSymbol)}</div>
                </div>
            );
        } else {
        console.error(`No layout pattern for this card value. ${value}`);
        return null;
        }
    } else {
        if (pattern) {
            return (
                <div className="center">
                    <div className="center-left-cramped">{Array(pattern[0]).fill(suitSymbol)}</div>
                    <div className="center-center">{Array(pattern[1]).fill(suitSymbol)}</div>
                    <div className="center-right-cramped">{Array(pattern[2]).fill(suitSymbol)}</div>
                </div>
            );
        } else {
            console.error(`No layout pattern for this card value. ${value}`);
            return null;
        }
    }
}

// Example usage
console.log(renderCardSuits('J', 'clubs'));