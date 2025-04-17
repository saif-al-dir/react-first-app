import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import styles from './List.module.scss';

const List = (props) => {
    const columns = useSelector(state => state.columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column key={column.id}
                        {...column} />
                )}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;