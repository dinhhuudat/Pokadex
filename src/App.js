// import { Typography } from '@mui/material'; 
import { Button } from '@material-ui/core';
import { BrowserRouter as Router,Route,Link, NavLink  } from 'react-router-dom';
import './App.css';  
import Pokedex from './component/pokedex';
import Pokemon  from './component/Pokemon';


function App(props) {
   

  return (
    <Router>   
        <Route 
          exact
          path='/Pokadex/:pokemonId'  
        > 
        <Pokemon/>
        </Route> 

        <Route 
          exact
          path='/Pokadex' 
        >
          <Pokedex/>
        </Route> 
    </Router>
  );
}

export default App;
