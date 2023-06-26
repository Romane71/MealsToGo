
import React from 'react';
import { FlatList} from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { useContext } from 'react';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Spacer } from '../../../components/spacers/spacer.components';
import { ActivityIndicator} from 'react-native-paper';
import { Search } from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
`;
const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left: 50%;
`

export const RestaurantsScreen = () => {
const { isLoading, error, restaurants} = useContext(RestaurantsContext);
return (
 <SafeArea>
  {isLoading && (
    <LoadingContainer>
      <Loading
      size={50}
      animating={true}
   
      />
    </LoadingContainer>
  )}
  <Search />
  <RestaurantList 
  data={restaurants}
  renderItem={({ item })  => {
    console.log(item)
    return ( 
    <Spacer position="bottom" size="large">
   <RestaurantInfoCard  restaurant={item}/>
   </Spacer>
    );
  }}
  keyExtractor={(item) => item.name}
  />
  </SafeArea>

 )};

