import React from 'react';
import styled from 'styled-components'

// Styled components here

const Card = styled.div`
width:50%;


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
const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;

flex-wrap: wrap;
`
const Name = styled.p`
width:50%;
margin-left:25%;
color: #FFFFFF;
background: black;
text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
`


const CharacterCard = props =>{
    return (
        <Container>
        <Card>
            
            <Name>Name: {props.name}</Name>
            <p>Height: {props.height}</p>
            <p>Weight: {props.mass}</p>
            <p>Hair Color: {props.testestest}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Gender: {props.gender}</p>
            <p>Birth Year:{props.birth_year}</p>
        </Card>
        </Container>
    )
}

export default CharacterCard;