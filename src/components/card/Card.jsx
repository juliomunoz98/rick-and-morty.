import styles from"./card.module.css"
import {Link} from "react-router-dom"


export default function Card({id, name, species, image, gender, onClose }) {
   return (
   
   <div className={styles.container}>
      <cartas className={styles.carta}>   
      <div >
         <div className={styles.idboton}> 
            
              
               <h2 className={styles.ids}> {id}</h2>    
               <h2 className={styles.nombre}>{name}</h2>

               <button onClick={onClose} className={styles.button}>X</button> 
                      
       </div>             
           <Link to={`/detail/${id}`}>                          
            <img className={styles.imagen} src={image} alt="no found" />
             </Link>  
            
            </div>
                      
           </cartas>                  
                       
            
                   {/* <div className={styles.piecarta}>  */}           
                   {/* <h2>{species}</h2>
                       <h2>{gender}</h2> */}        
                   {/* </div> */} 
                   
        </div>
         
   );
}
