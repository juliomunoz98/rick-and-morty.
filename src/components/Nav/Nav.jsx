import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props) {
// const enlace = useNavigate()
// const atributo =()=>{enlace("/about") }
// const atributoHome =()=>{enlace("/")}

// const NavLinkMe =({
//     to,children, ...props}) =>{
//     return ( <NavLink  {...props}
//         to={to}
//         className={({ isActive }) => (
//     isActive ? styles.active : styles.disable)}> {children}
//     </NavLink>
//     );
// };




    return (
     <div >
        {/* <div >
         <button className= {styles.boton} onClick= {atributo}>about</button>
         <button onClick= {atributoHome}>home</button>  
       </div> */}   

         {/* <NavLinkMe to="/home">Home </NavLinkMe>
         <NavLinkMe to="/about"> About </NavLinkMe>
          */}

        <div className={styles.letras}>
            <Link name="/about" to="about" > ABOUT</Link>
            <Link to="/home">HOME</Link>
            <Link to="/favorites">FAVORITES</Link>
        </div>
        
      
            
       
         <SearchBar onSearch= {(characterID) => props.onSearch(characterID)}/>
     </div>
    );
};




