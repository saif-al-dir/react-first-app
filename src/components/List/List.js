import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import styles from './List.module.scss';
import { useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';
import { getListById } from '../../redux/listReducer';
import { getColumnsByList } from '../../redux/columnsReducer';

const List = (props) => {
    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));

    if (listData) return <Navigate to="/" />;

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData}</h2>
            </header>
            <p className={styles.description}>{listData}</p>
            <SearchForm value={props.searchString} />
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