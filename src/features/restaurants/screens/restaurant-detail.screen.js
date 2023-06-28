import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="French toast, red berries & mascarpone cheese" />
          <List.Item title="Avocado toast, smoked salmon, ricotta & caramelised onions" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Truffle pizza, truffle sauce and portobello mushroom" />
          <List.Item title="French Croque-Monsieur, salad and homemade fries" />
          <List.Item title="Mushroom Arancini, balsamic vinegar sauce and arugula" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Seafood linguine, white wine & mussels sauce" />
          <List.Item title="Half lobster, salad, dills and lime sauce. Served with homemade fries" />
          <List.Item title="Wagyu sirloin steak, blue cheese sauce and homemade fries" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffees" />
          <List.Item title="Porn Star Martini" />
          <List.Item title="Expresso Martini" />
          <List.Item title="Limoncello Spritz" />
          <List.Item title="Spicy Margarita" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
