import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/searchStringReducer';

const Column = (props) => {
    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <div className={styles.column}>
            <h2>
                <span className={`${styles.icon} fa fa-${props.icon}`} />
                {props.title}
            </h2>
            <div>{props.children}</div>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </div>
    );
};

export default Column;