import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";


export default function Nav(props) {
// const enlace = useNavigate()
// const atributo =()=>{enlace("/about") }
// const atributoHome =()=>{enlace("/home")}
// const atributoexit =()=>{enlace("/")}
// const atributofav =()=>{enlace("/favoritos")}

const NavLinkMe =({
    to,children, ...props}) =>{
    return ( <NavLink  {...props}
        to={to}
        className={({ isActive }) => (
    isActive ? styles.active : styles.disable)}> {children}
    </NavLink>
    );
};




    return (
     <div >
        {/* <div className= {styles.letras} >
         <button onClick={atributoexit}>Exit</button>
         <button onClick= {atributo}>about</button>
         <button onClick= {atributoHome}>home</button>  
         <button onClick={atributofav}>Favoritos</button>
       </div>; */}

         <div className={styles.letras}>
         <NavLinkMe  to="/" className={styles.linke}>Exit</NavLinkMe>
         <NavLinkMe  to="/home" className={styles.linke}>Home </NavLinkMe>
         <NavLinkMe  to="/about" className={styles.linke}> About </NavLinkMe>
         </div>

        {/* <div className={styles.letras}>
            <Link name="/about" to="about" > ABOUT</Link>
            <Link to="/home">HOME</Link>
            <Link to="/favorites">FAVORITES</Link>
        </div>
         */}
      
          {/* <div className={styles.letras}>
            <li><a href="/">Exit</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/favorite">Favorites</a></li>
          </div>   */}
       
         <SearchBar onSearch= {(characterID) => props.onSearch(characterID)}/>
     </div>
    );
};




