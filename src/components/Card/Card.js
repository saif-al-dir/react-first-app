import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(id));
    };

    return (
        <li className={styles.card}>{title}
            <button onClick={handleToggleFavorite}>
                <span className={`${styles.icon} fa ${isFavorite ? 'fa-star' : 'fa-star-o'}`} />
            </button>
        </li>
    );
};

export default Card;