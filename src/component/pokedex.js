import React,{useState,useEffect} from 'react';
import { AppBar ,
         Toolbar ,
         Grid, 
         makeStyles,
         CardContent,
         CardMedia,
         Card,
         CircularProgress,
         Typography,
         TextField,
         Box,
         CardActionArea} from '@material-ui/core'; 
import { Search } from '@material-ui/icons';


const useStyles=makeStyles((theme)=>({
    pokedexContainer:{
        paddingTop:'20px',
        paddingRight:'50px',
        paddingLeft:'50px',
    },
    cardMediaStyle:{
        height:130,
        width:'100%',
        paddingTop:'36%',
        margin:'auto',
        backgroundSize:'cover'
    },
    cardContentStyle:{ 
        textAlign:'center'
    },
    searchIconWrapper:{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    input:{ 
        color:'white',backgroundColor:'white' 
    }
})
) 

function Pokedex(props) {
    
    useEffect(() => 
    { 
        async function getData(){
            const respone=await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            const responeData= await respone.json()
            // const {dataResponse}=json.data
            
            const newPokemonData={}
             responeData.results.forEach((pokemon,index)=>
                   { newPokemonData[index+1]={id:index+1,
                    name: pokemon.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`, }}
            )
            // console.log(newPokemonData)
            setPokemonData(newPokemonData)
        }
        getData()
    }, []) 

    const[pokemonData,setPokemonData]=useState([])
    const[filterString,setfilter]=useState('')
    const classes=useStyles(); 
    const {history}=props 

    // console.log ('history',history)
     
    const getPokemonCard=(data )=>{
        // console.log('dataGet',data )
        return(
            <Grid item xs={12} sm={4} lg={2} key={data.id}
                  
            >
                <Card>
                    <CardActionArea
                        onClick={()=>history.push(`/${data.id}`,{detail:data.id})}
                    >
                        <CardMedia 
                            className={classes.cardMediaStyle}
                            image={data.sprite} 
                        />
                    </CardActionArea>
                    <CardContent className={classes.cardContentStyle}>
                        <Typography variant='h5'>{data.id}: {data.name}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

     

    function searchData(e){
         setfilter(e.target.value)
    }

    return (
        <> 
            <AppBar searchBar position='static'>
                <Toolbar > 
                    <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Typography>POKADEX</Typography>
                    </Grid>

                    <Grid item>
                        <Box className={classes.searchIconWrapper}>
                        <Search/> 
                        <TextField 
                            className={classes.input}
                            id="outlined-basic" 
                            label="Search..." 
                            variant="outlined" 
                            size='small'
                            color='white'
                            onChange={(e)=>searchData(e)}
                            />
                        </Box> 
                    </Grid>
                    </Grid>
                </Toolbar> 
            </AppBar>
            {pokemonData ? (
                        <Grid container spacing={2} className={classes.pokedexContainer}>
                            {
                            Object.keys(pokemonData).map((pokemonId)=>( 
                                pokemonData[pokemonId].name.includes(filterString) &&
                                getPokemonCard(pokemonData[pokemonId])
                               )) }
                        </Grid> 
                        )  :<CircularProgress/> 
            }

        </>
        
    );
}

export default Pokedex;