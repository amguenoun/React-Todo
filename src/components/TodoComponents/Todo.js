import React from 'react'

const Todo = (props) => {
    return (
        <div onClick={() => props.toggleComplete(props.task.id)} className={props.task.completed ? 'completed' : null}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;