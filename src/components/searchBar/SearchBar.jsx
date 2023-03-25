import { useState } from "react";
import styles from "./searchBar.module.css"

export default function SearchBar(props) {

const [character, setCharacter] = useState("")
const handleImputChange = (event) => {
   const {value} = event.target
   setCharacter(value)
}
   return (
      <div className={styles.ordenc}>
      
        <button onClick={()=>props.onSearch(character)}className={styles.sboton}>Agregar</button>
         

         <input className={styles.cabecera} type='search' onChange={handleImputChange}/>
        
      </div>
   );
}
