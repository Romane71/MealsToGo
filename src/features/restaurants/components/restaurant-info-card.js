import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

// always have the px with styled components

const RestaurantCard = styled(Card)`
background-color: white;`;

const RestaurantCardCover = styled(Card.Cover)` 
padding: 20px;    
background-color: white;
`;

const Title = styled.Text`
padding: 16px;
color: ${(props) => props.theme.colors.ui.success};
font-size: ${(props) => props.theme.fontSizes.body};
`;



const Info = styled.View`
padding: ${(props) => props.theme.space[3]}
`



export const RestaurantInfoCard = ({ restaurant  = {} }) => {

    const {
    name = 'Some Restaurant',
    icon,
    photos = [
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,

} = restaurant;

return (
    <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name}  source={{uri: photos[0] }} />
    <Info>
 <Title>{name}</Title>
 </Info>
    </RestaurantCard>
);
};

