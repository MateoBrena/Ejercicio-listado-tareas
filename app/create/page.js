import React from "react";
import Link from "next/link";

export default function Create() {
    return (
        <div>
            <h1 className="header"> Acá se pueden crear tareas nuevas</h1>
            <form className="formulario">
                <input name="title" placeholder="Introduzca la tarea"></input>
                <label htmlFor="completed"> Está completada?</label>
                <select name="completed" placeholder="Está completada?">
                    <option value="true"> Si </option>
                    <option value="false"> No </option>
                </select>
                <button type="submit"> Agregar Tarea</button>
            </form>
            <Link href="/"> Volver al Inicio</Link>
        </div>
       ) 
}