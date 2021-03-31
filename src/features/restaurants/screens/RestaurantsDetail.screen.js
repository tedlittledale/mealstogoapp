import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, List } from "react-native-paper";
import { FlatList, Text } from "react-native";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/Search.component";
import { SafeArea } from "../../../components/utils/SafeArea.component";

const ListView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsDetailScreen = ({
  route: {
    params: { item },
  },
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={item} />
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="coffee" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon {...props} icon="silverware-fork-knife" />
          )}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title=""
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </SafeArea>
  );
};
