import styles from './Column.module.scss';

const Column = (props) => {
    return (
        <div className={styles.column}>
            <h2>
                <span className={`${styles.icon} fa fa-${props.icon}`} />
                {props.title}
            </h2>
            <div>{props.children}</div>
        </div>
    );
};

export default Column;