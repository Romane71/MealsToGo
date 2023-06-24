import React from'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacers/spacer.components';

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
padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[2]};
`;


const Section = styled.View`
flex-direction: row;
align-items: center;
`;

const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;

`

export const RestaurantInfoCard = ({ restaurant  = {} }) => {

    const {

    name = 'Cafe de Paris',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    ],
    address = "5 Avenue des Champs Elysees. Paris",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary = true,

} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));


return (
    <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name}  source={{uri: photos[0] }} />
    <Info>

 <Title>{name}</Title>
 <Section>
 <Rating>
 {ratingArray.map(() => (
 <SvgXml xml={star} width={20} height={20} />
  ))}
  </Rating>
  <SectionEnd>
 {isClosedTemporary && (
    <Text variant="label" style={{color: "red"}}>
        CLOSED TEMPORARILY
    </Text>
 )}
<Spacer position= "left" size="medium">
 {isOpenNow && <SvgXml xml={open} width={40} height={20} />}
 </Spacer>
<Spacer position="left" size="large">
<Image style={{width: 15, height: 15}} source={{ uri: icon}} />
</Spacer>
  </SectionEnd>
  </Section>
 <Address>{address}</Address>
 </Info>
    </RestaurantCard>

);
};

