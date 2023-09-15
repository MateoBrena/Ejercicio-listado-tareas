import React from "react";

export default function Task ({title, id, completed}){
        
    return (
        <li key={id}>
            <p><strong>Title:</strong> {title}</p>
            {completed ? <p><strong className="completed"> COMPLETADA </strong></p> : <p><strong className="not-completed"> NO COMPLETADA </strong></p>}
        </li>
    )
}