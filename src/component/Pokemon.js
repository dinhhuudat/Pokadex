import { Paper,CardHeader, Typography,Card, CardMedia, CardContent, makeStyles, Button, CircularProgress } from '@material-ui/core';
import React,{useState,useEffect}  from 'react';
import { useParams,useHistory } from 'react-router-dom';
import PokemonData from '../pokeData/mock';

const usestyles=makeStyles({
    cardStyle:{

    },
    cardMediaStyle:{
        width:130,
        height:130
    }
    ,
    buttonCss:{
        marginTop:20
    }
})



function Pokemon(props) {

    const[pokemon,setPokemon] = useState('')
    const classes=usestyles()  
    const{pokemonId}=useParams() 
    const history=useHistory()


    useEffect(() => { 
        async function getData(){
            const respone=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            const responeData= await respone.json()
            //  console.log(responeData)

            setPokemon(responeData)
        }
        getData()
    }, [])
 
    const rederPokemonJSX=()=>{
        
        const{name,id,species,height,weight,types}=pokemon
        const sprites =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id
          }.png`
   
        return(
            <  >

                <Typography
                    variant='h2'  
                >{ `${id}. ${name}`} </Typography> 
                         
                <img 
                    src={sprites}
                    className={classes.cardMediaStyle}
                    alt='hinh'
                />
 
                <Typography variant='h5'>
                    Pokemon Info
                </Typography>

                <Typography variant='h6'>
                    Species: {species.name}
                </Typography>

                <Typography variant='h6'>
                    Height: {height}
                </Typography>

                <Typography variant='h6'>
                    Weight: {weight}
                </Typography>

                
                <Typography variant='h6'>
                    Types:  {types.map((type)=>( 
                            type.type.name
                            )).toString(',')}
                </Typography> 
 
                 <Button 
                    className={classes.buttonCss}
                    variant='contained' 
                    size='large'
                    color='primary'
                    onClick={()=>{history.push('/Pokadex')}}
                >
                 Back To Home
                 </Button>       
            </>
        )

    }
    return (
        <>
            {pokemon ? rederPokemonJSX() : 
                <div style={{display: 'flex' , justifyContent: 'center', width: '100%'}}><CircularProgress/></div>
            }
        </>
    );
}

export default Pokemon;