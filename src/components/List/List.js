import styles from './List.module.scss';

const List = (props) => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do <span>soon</span></h2>
                <p className={styles.description}>Interesting things I want to check out</p>
            </header>
            <section className={styles.columns}>
                <article>
                    <h3 className={styles.title}><span className={`${styles.icon} fa fa-book ${props.icon}`} /> Books</h3>
                </article>
                <article>
                    <h3 className={styles.title}> <span className={`${styles.icon} fa fa-film ${props.icon}`} /> Movies</h3>
                </article>
                <article>
                    <h3 className={styles.title}><span className={`${styles.icon} fa fa-gamepad ${props.icon}`} /> Games</h3>
                </article>
            </section>
        </div>
    );
};

export default List;