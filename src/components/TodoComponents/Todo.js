import React from 'react'

const Todo = (props) => {
    console.log(props.task)
    return (
        <div onClick={() => props.toggleComplete(props.task.id)}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;