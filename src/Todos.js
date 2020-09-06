import React from 'react';

function Todos({ content, deleteTodo }) {
    const todos = content.length > 0 ?
    content.map(con => {
        return (
            <div className="center collection-item" key={ con.id } onClick={() => {deleteTodo(con.id)}}>
                <span>{con.content}</span>
            </div>
        )
    }) :
    (<p className="center">You have nothing todo, Get some life Bruh!</p>)
    return (
        <div className="todos collection">
            { todos }
        </div>
    )
}

export default Todos;