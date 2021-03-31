import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const Info = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const InfoCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const Rating = styled.View`
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  flex-direction: row;
`;

export const RowEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const OpenIcon = styled(SvgXml)`
  align-self: flex-end;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Wrapper = styled.View``;
