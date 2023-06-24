import styled from "styled-components";
import React from 'react';
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";




export const Icon = styled.Image`
width: 15px;
height: 15px;
`

export const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin-bottom: ${(props) => props.theme.space[3]}`;

export const RestaurantCardCover = styled(Card.Cover)` 
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary}
`;

export const Address = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.caption};

`;

export const Info = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[2]};
`;


export const Section = styled(View)`
flex-direction: row;
align-items: center;
`;

export const SectionEnd = styled(View)`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;
