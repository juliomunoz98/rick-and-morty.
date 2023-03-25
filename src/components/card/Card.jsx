import styles from"./card.module.css"
import {Link} from "react-router-dom"


export default function Card({id, name, species, image, gender, onClose }) {
   return (
        <div className={styles.cartas}>
      <div className={styles.bboton}><button       onClick={onClose} className={styles.button}>X</button>
      
      </div>

         
         <Link to={`/detail/${id}`}className={styles.link}>
           <h2 className={styles.ids}> {id}</h2>   
          <h2 className={styles.lnombre}>{name}</h2>
         </Link>
      

       


       <div className={styles.imagen}><img  src={image} alt="no found" /></div>

      <div className={styles.piecarta}> 
           
         <h2>{species}</h2>
         <h2>{gender}</h2>
         
      </div>
      
     </div>
   );
}
