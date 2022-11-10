import React, {useState} from 'react';
import TodoItem from "./item/TodoItem/TodoItem";
import logo from '../../assets/main-check.png';
import classes from './Home.module.css'
import MyNavLink from "../../components/MyNavLink/MyNavLink";
import TodoInput from "./item/TodoInput/TodoInput";

const data = []

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const cp = [...todos]
        const cur = cp.find(t => t.id === id)
        cur.isDone = !cur.isDone
        setTodos(cp)
    }

    const removeTodo = id =>
        setTodos([...todos].filter(t => t.id !== id))

    return (
        <div>
            <header className={classes.title}>
                <img src={logo} />
                <h1>To-do List</h1>
            </header>
            <div className={classes.signin}>
                <MyNavLink role="button" to="/sign-in">
                    Sign in
                </MyNavLink>
            </div>
            <div className={classes.rectangle}>
                <h2 className={classes.promo}>
                    Plan your work and life easily. <br />
                    Never been so convenient and simple!
                </h2>
            </div>
            <div className={classes.todoblck}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
            ))}
            </div>
            <TodoInput setTodos={setTodos}/>
            <footer>
                <hr className={classes.line}/>
                <p className={classes.rights}>
                    &copy; Copyright 2022 by Botar-boo
                </p>
            </footer>
        </div>
    );
};

export default Home;