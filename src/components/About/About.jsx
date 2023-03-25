import React from "react";
import styles from "./about.module.css";

export default function About (){
    return (
        <div className={styles.perfil}>
            <h1>Nombre: Julio Muñoz</h1>
            <h3 className={styles.text}>
                <h3>ESPECIE: Humano</h3>
                <h3>GENERO: Masculino</h3>
                <h3>NACIDO: 1998</h3>
                <p>Estudiante de SoyHenry en la carrera de desarrollador web full stack developer. </p>
                 <img src="" alt="" />
            </h3>          
        </div>
    );
}