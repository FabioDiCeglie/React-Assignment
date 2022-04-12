/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCharacters } from "../../store/CharactersByDimension/actions";
import { selectCharactersByDimension } from "../../store/CharactersByDimension/selectors";
import {
  Title,
  Wrapper,
  WrapperCards,
  Image,
  WrapperCardsDescription,
} from "../../components/components.style";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch, fetchCharacters]);

  const charactersByDimension = useSelector(selectCharactersByDimension);

  if (!charactersByDimension) {
    return "Loading";
  }

  return (
    <>
      <Title>{charactersByDimension?.dimension} characters:</Title>
      <Wrapper>
        {charactersByDimension?.charactersByDimensionAliveLastSeen?.map(
          (character) => (
            <WrapperCards key={character.id}>
              <Image src={character.image} alt={character.name} />
              <WrapperCardsDescription>
                <NavLink
                  to={`/character/detail/${character.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h4>{character.name}</h4>
                </NavLink>
                <p>Species: </p>
                {character.species}
                <p>Gender: </p>
                {character.gender}
                <p>Last known location:</p>
                {character.location.name}
                <p>Last seen in episode:</p>
                {character.episode.name}
              </WrapperCardsDescription>
            </WrapperCards>
          )
        )}
      </Wrapper>
    </>
  );
};
