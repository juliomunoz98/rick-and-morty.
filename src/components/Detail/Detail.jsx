import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detail.module.css";

export default function Detail(props) {
    const navigate = useNavigate ();
    const {detailId}= useParams();
    const [character, setCharacter] = useState({});
    useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((res)=> res.json())
        .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("Ups! Algo estuvo mal");
          });
        return ()=>setCharacter({})
      }, [detailId]);

    return (
     <div className={styles.esste}>
            
        
          <div className={styles.interno}>
            <button className={styles.botons} onClick={()=> navigate("/home")}>regresar</button>
            <h1>Name: {character.name}</h1> 
            <h1>Status: {character.status}</h1> 
            <h1>Specie: {character.species}</h1> 
            <h1>Gender: {character.gender}</h1> 
            <h1>Origin: {character.origin?.name}</h1> 
          </div>
            <img className={styles.imags} src={character.image} alt="No fount"/>
    </div>
          
        

    );
}

