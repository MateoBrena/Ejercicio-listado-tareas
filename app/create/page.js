'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function CreateTask() {
    const [title , setTitle] = useState("")
    const [completed, setCompleted] = useState("true")

    return (
        <div className="principal-container">
            <h1 className="header"> Crear nueva tarea</h1>
            <form>
                <input name="title" placeholder="Introduzca la tarea" value={title} onChange={e => { setTitle(e.target.value); }}></input>
                <label htmlFor="completed"> Está completada?</label>
                <select name="completed" placeholder="Está completada?" value={completed} onChange={e => {setCompleted(e.target.value)}}>
                    <option value="true"> Si </option>
                    <option value="false"> No </option>
                </select>
                <button type="submit"> Agregar Tarea</button>
            </form>
            <Link href="/" className="back"> Volver al Inicio</Link>
        </div>
       ) 
}