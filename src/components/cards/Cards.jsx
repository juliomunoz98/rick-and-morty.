import Card from '../card/Card';
import styles from "./cards.module.css" 

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.carta}>
      {characters.map((Char) => (
         <Card
          key = {Char.id}
          name={Char.name}
          species={Char.species}
          gender={Char.gender}
          image={Char.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
         />
       ))}      
   </div>
   );
}
