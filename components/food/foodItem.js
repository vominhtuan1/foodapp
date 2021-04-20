import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
const FoodItem = (props) => {
  return (
    <ListItem onPress={() => console.log("item onPress")} thumbnail>
      <Left>
        <Thumbnail large source={props.src} />
      </Left>
      <Body>
        <Text>{props.name}</Text>
        <Text note numberOfLines={1}>
          {props.description}
        </Text>
        <Text>{props.price}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Text uppercase={false}>Thêm vào giỏ </Text>
        </Button>
      </Right>
    </ListItem>
  );
};
export default FoodItem;
