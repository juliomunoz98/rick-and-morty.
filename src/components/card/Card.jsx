import styles from"./card.module.css"

export default function Card(props) {
   return (
      <div className={styles.cartas}>
         <button onClick={props.onClose}>X</button>
         <h2 className={styles.h2jiji}>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="no found" />
      </div>
   );
}
