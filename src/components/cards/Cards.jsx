import React from 'react';
import Card from '../card/Card';
import styles from "./cards.module.css" ;

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.carta}>
     {/* <div className={styles.otro}> */}
       {characters.map(({id, name, species,    gender, image}) => (
         <Card
           id = {id}
          key = {id}
          name= {name}
          species= {species}
          gender= {gender}
          image= {image}
          onClose= {() => props.onClose(id)}
         />
       ))} 
    </div>    
   // </div>
   );
}
