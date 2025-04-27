
const ADD_CARD = 'app/cards/ADD_CARD';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const removeCard = (cardId) => ({
    type: REMOVE_CARD,
    payload: cardId,
});

export const toggleCardFavorite = cardId => ({
    type: 'TOGGLE_CARD_FAVORITE',
    payload: cardId,
});

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, action.payload];
        case 'TOGGLE_CARD_FAVORITE':
            return statePart.map(card =>
                (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card
            );
        case REMOVE_CARD:
            return statePart.filter(card => card.id !== action.payload);
        default:
            return statePart;
    }
};

export default cardsReducer;