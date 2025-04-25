import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/store";
import Button from "../Button/Button";


const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList(title, description));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="List Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="List Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <Button>Add List</Button>
        </form>
    );
};

export default ListForm;