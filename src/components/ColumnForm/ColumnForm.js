import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState(''); // State for the title input
    const [icon, setIcon] = useState('');   // State for the icon input

    const handleSubmit = e => {
        e.preventDefault(); // Prevent the default form submission behavior
        props.action({ title: title, icon: icon }); // Pass both title and icon to the parent
        setTitle(''); // Clear the title input
        setIcon('');  // Clear the icon input
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                Title:
                <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
            </label>
            <label>
                Icon:
                <TextInput value={icon} onChange={e => setIcon(e.target.value)} placeholder="Enter icon" />
            </label>
            <Button>Add column</Button>
        </form>

    );
};

export default ColumnForm;