import React, {useState} from 'react';
import classes from './TodoInput.module.css';

const TodoInput = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isDone: false,
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div className={classes.crtfld}>
            <input
                className={classes.crtinpt}
                type='text'
                onChange={e => setTitle(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                value={title}
                placeholder='Add a task'
            />
        </div>
    );
};

export default TodoInput;