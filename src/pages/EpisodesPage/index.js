/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEpisodes } from "../../store/Episodes/actions";
import { selectEpisodes } from "../../store/Episodes/selectors";
import {
  Title,
  Wrapper,
  WrapperCards,
  WrapperCardsDescription,
} from "../../components/components.style";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  const episodes = useSelector(selectEpisodes);
  console.log(episodes);

  if (!episodes) {
    return "Loading";
  }

  return (
    <>
      <Title>List of all episodes:</Title>
      {episodes.info.prev && <button>{episodes.info.prev}</button>}
      <button>{episodes.info.next}</button>
      <Wrapper>
        {episodes?.results?.map((episode) => (
          <WrapperCards key={episode.id}>
            <WrapperCardsDescription>
              <h4>{episode.name}</h4>
              <p>Episode: </p>
              {episode.episode}
              <p>Date: </p>
              {episode.air_date}
            </WrapperCardsDescription>
          </WrapperCards>
        ))}
      </Wrapper>
    </>
  );
};
