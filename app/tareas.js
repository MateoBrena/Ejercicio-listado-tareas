import React from "react";



export default function Tareas({title, id, completed}){
        
    return (
        <li key={id}>
            <p><strong>Title:</strong> {title}</p>
            {completed ? <p><strong className="completada"> COMPLETADA </strong></p> : <p><strong className="no-completada"> NO COMPLETADA </strong></p>}
        </li>
    )
}