import React from 'react';
import styled from 'styled-components'

// Styled components here

const Card = styled.div`
width:100%;


font-size: 19px;
letter-spacing: 2px;
word-spacing: 2px;
color: white;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
border: 5px outset #1C6EA4;
border-radius: 40px 40px 40px 40px;
`;



const CharacterCard = props =>{
    return (
        <Card>
            
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.mass}</p>
            <p>Hair Color: {props.testestest}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Gender: {props.gender}</p>
            <p>Birth Year:{props.birth_year}</p>
        </Card>
    )
}

export default CharacterCard;