import styles from "./searchBar.module.css"

export default function SearchBar(props) {
   return (
      <div className={styles.cabecera}>
         <input type='search' />
      <button onClick={()=>props.onSearch("estoy recibiendo un ID")}>Agregar</button>
      </div>
   );
}
