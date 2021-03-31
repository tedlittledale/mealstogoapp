import styled from "styled-components";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `${StatusBar.currentHeight}px;`}
  background: ${({ theme }) => theme.colors.bg.secondary};
`;
