import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar as PaperSearchBar } from "react-native-paper";
import { LocationContext } from "../../../services/locations/locations.context";

const SearchView = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  justify-content: center;
  align-items: flex-start;
`;

const SearchBar = styled(PaperSearchBar)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  z-index: 1000000;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SearchView>
      <SearchBar
        placeholder="Search"
        onSubmitEditing={() => search(searchQuery)}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchQuery(text);
        }}
        value={searchQuery}
      />
    </SearchView>
  );
};
