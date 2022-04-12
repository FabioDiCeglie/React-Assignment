/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../store/CharactersByLocation/actions";
import { selectCharactersByLocation } from "../../store/CharactersByLocation/selectors";

import styled from "styled-components";

const Title = styled.h4`
  color: black;
  font-size: 30px;
`;

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByLocation = useSelector(selectCharactersByLocation);
  console.log(charactersByLocation);

  if (!charactersByLocation) {
    return "Loading";
  }

  return (
    <div>
      <Title>Characters from location {charactersByLocation?.location}:</Title>
      {charactersByLocation?.charactersByLocationAliveLastSeen?.map(
        (character) => (
          <div key={character.id}>
            <p>Name: {character.name}</p>
            <img src={character.image} alt={character.name} />
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Last seen in: {character.episode.name}</p>
          </div>
        )
      )}
    </div>
  );
};
