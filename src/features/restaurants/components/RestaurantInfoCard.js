import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/Spacer.component";
import { Text } from "../../../components/typography/Text.component";
import {
  Title,
  Info,
  Address,
  InfoCard,
  Rating,
  RowEnd,
  OpenIcon,
  Row,
  Logo,
  Wrapper,
} from "./RestaurantInfoCard.styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({
  restaurant: {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  },
}) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <Wrapper>
      <InfoCard>
        <Card.Cover source={{ uri: photos[0] }} />

        <Info>
          <Title>{name}</Title>
          <Row>
            <Rating>
              {ratingArray.map((_, idx) => (
                <SvgXml key={idx} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <RowEnd>
              {isClosedTemporarily && (
                <Text variant="label">CLOSED TEMPORARILY</Text>
              )}
              <>
                <Spacer position="left" size="large">
                  {isOpenNow && <OpenIcon xml={open} width={20} height={20} />}
                </Spacer>
                <Spacer position="left" size="large">
                  <Logo source={{ uri: icon }} />
                </Spacer>
              </>
            </RowEnd>
          </Row>
          <Address>{address}</Address>
        </Info>
      </InfoCard>
    </Wrapper>
  );
};
