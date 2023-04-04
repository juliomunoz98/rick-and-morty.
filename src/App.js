import { useEffect, useState } from 'react';
// import './App.css';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Form from './components/Form/Form';
import styles from "./App.module.css"

function App () {
  const navigate =useNavigate();
  const location = useLocation();
  
 const [characters, setCharacters]= useState([]);

// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };
const [access, setAccess] = useState(false)
const userName ="z"
const password ="z"
// jmuñoz@soyhenry.com
// julio12345
const onSearch = (id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((res) => res.json()) 
  .then((data) => {
   ( data.name ? characters.filter((char) => char.id === data.id).length === 0 : "") ? setCharacters([...characters, data]):
    alert("Ese personaje ya existe")
  })
  .catch((error) => console.log(error));
};

const onClose = (id)=> {
   const filtered = characters.filter((char) => char.id  !== Number(id))
   setCharacters (filtered )
}

const login =(userData)=>{
  if(userData.userName === userName && userData.password === password) { setAccess(true)
   navigate("/home")
  }
};

useEffect(() => {
  !access && navigate("/")
},[access, navigate]);

  return (
    <div className={styles.App }>
      {location.pathname !== "/" &&
       <Nav onSearch={onSearch} />}
        
        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path= "/home" element= {<Cards characters= {characters} onClose={onClose}/>}/>
          <Route path= "/about" element= {<About/>}/>
          <Route path= "/detail/:detailId" element= {<Detail />}/>
        </Routes>

         <div >
          <img className={styles.nave} src="https://static.tumblr.com/6b347bb510871189c90e782f2accc06b/yre31ty/WVLoedopr/tumblr_static_bbicigegeggsoooc8wg800ow4.png" alt='no found'/>   
         </div>       
    </div>
  );
}

export default App
