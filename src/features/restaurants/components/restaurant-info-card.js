import React from'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacers/spacer.components';
import { Text } from '../../../components/typography/text.component';
import { RestaurantCard,
     RestaurantCardCover,
     Info,
    Section, 
    SectionEnd, 
     Rating, 
     Icon,
     Address } from './restaurant-info-card.styles';
// always have the px with styled components


export const RestaurantInfoCard = ({ restaurant  = {} }) => {

    const {

    name = 'Cafe de Paris',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
        "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    ],
    address = "5 Avenue des Champs Elysees. Paris",
    isOpenNow = true,
    rating = 3,
    isClosedTemporary = true,
    placeId

} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));


return (
    <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name}  source={{uri: photos[0] }} />
    <Info>
<Text variant="label">{name}</Text>
 <Section>
 <Rating>
 {ratingArray.map((_, i) => (
 <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
  ))}
  </Rating>
  <SectionEnd>
 {isClosedTemporary && (
    <Text variant="error" >
        CLOSED TEMPORARILY
    </Text>
 )}
<Spacer position= "left" size="medium">
 {isOpenNow && <SvgXml xml={open} width={40} height={20} />}
 </Spacer>
<Spacer position="left" size="large">
<Icon source={{ uri: icon}} />
</Spacer>
  </SectionEnd>
  </Section>
 <Address>{address}</Address>
 </Info>
    </RestaurantCard>

);
};

