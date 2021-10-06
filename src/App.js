// import { Typography } from '@mui/material'; 
import { Button } from '@material-ui/core';
import { Route,Switch } from 'react-router-dom';
import './App.css';  
import Pokedex from './component/pokedex';
import Pokemon  from './component/Pokemon';


function App(props) {
 

  return (
    <Switch>
 
      <Route 
        exact
        path='/:pokemonId'
        render={(props)=><Pokemon {...props}/>}
      />

      <Route 
        path='/' 
        render={(props)=><Pokedex {...props}></Pokedex>}
      />

    </Switch>
  );
}

export default App;
