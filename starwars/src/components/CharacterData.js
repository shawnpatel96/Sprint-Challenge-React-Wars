import React, { useEffect, useState } from 'react';

import CharacterCard from './CharacterCard'
import Axios from 'axios';


function CharacterData() {
    const [character, setCharacter] = useState([])

    useEffect(()=>{
      Axios.get("https://swapi.co/api/people/")
      .then(response=>{
        console.log(response.data.results)  // This is showing my characters
        setCharacter(response.data.results)
      })
      .catch((error)=>{
        console.log('no data', error)
      })
  
    }, [])
  
    return (
      <div className="">
      
  
        {character.map((chars)=>{
          console.log(chars) // this is shows all my characters
          return (
            <CharacterCard
             key={chars.url}
             name={chars.name}
             height={chars.height}
             mass= {chars.mass}
             testestest={chars.hair_color}   
             eye_color={chars.eye_color}      
             skin_color={chars.skin_color}
             gender={chars.gender}
             birth_year={chars.birth_year}
            />
            )
          })}
      </div>
    );
}

export default CharacterData