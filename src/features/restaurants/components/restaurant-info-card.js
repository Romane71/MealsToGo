import React from 'react';
import styled from 'styled-components';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgFromXml } from 'react-native-svg';
import star from '../../../../assets/star';

// always have the px with styled components



const RestaurantCard = styled(Card)`
background-color: white;`;

const RestaurantCardCover = styled(Card.Cover)` 
padding: 20px;    
background-color: white;
`;

const Address = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.caption};

`;


const Title = styled(Text)`
color: ${(props) => props.theme.colors.ui.primary};
font-size: ${(props) => props.theme.fontSizes.body};
font-family: Georgia;
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]}
`

const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[2]}
`

export const RestaurantInfoCard = ({ restaurant  = {} }) => {

    const {
    name = 'Cafe de Paris',
    icon,
    photos = [
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    ],
    address = "5 Avenue des Champs Elysees. Paris",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,

} = restaurant;

const ratingArray = Array.from(new Array(Math.ceil(rating)));
console.log(ratingArray)

return (
    <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name}  source={{uri: photos[0] }} />
    <Info>
 <Title>{name}</Title>
 <Rating>
 {ratingArray.map(() =>
 <SvgFromXml xml={star} width={20} height={20}/>
  )}
  </Rating>
 <Address>{address}</Address>
 </Info>
    </RestaurantCard>
);
};

