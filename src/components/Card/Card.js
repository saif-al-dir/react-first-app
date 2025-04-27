import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';
import { removeCard } from '../../redux/cardsReducer';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(id));
    };

    const handleRemoveCard = () => {
        dispatch(removeCard(id));
    };

    return (
        <li className={styles.card}>{title}
            <button onClick={handleToggleFavorite}>
                <span className={`${styles.icon} fa ${isFavorite ? 'fa-star' : 'fa-star-o'}`} />
            </button>
            <button onClick={handleRemoveCard}>
                <span className={`${styles.icon} fa fa-trash`} />
            </button>
        </li>
    );
};

export default Card;