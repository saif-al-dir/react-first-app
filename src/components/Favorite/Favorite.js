import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";



const Favorite = () => {
    const cards = useSelector(state => state.cards);
    const favoriteCards = cards.filter(card => card.isFavorite);

    if (favoriteCards.length === 0) {
        return <div>No cards...</div>; // Or redirect to home
    }

    return (
        <div>
            <h2>Favorite Cards</h2>
            {favoriteCards.map(card => (
                <Card key={card.id} id={card.id} title={card.title} />
            ))}
        </div>
    );
};

export default Favorite;