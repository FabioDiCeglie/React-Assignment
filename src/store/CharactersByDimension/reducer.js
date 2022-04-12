const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "charactersPage/charactersLoaded": {
      const filterByDimension = action.payload;

      const dimensionName = filterByDimension.map((dimension) => {
        return dimension.dimension;
      });
      const uniqueName = Array.from(new Set(dimensionName));

      const charactersByDimension = filterByDimension?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByDimensionAlive = charactersByDimension.flat();

      const charactersByDimensionAliveLastSeen = charactersByDimensionAlive.map(
        (character) => {
          const checkCharacterEpisodes = character.episode.reduce(function (
            prev,
            current
          ) {
            return prev.created > current.created ? prev : current;
          });

          return { ...character, episode: checkCharacterEpisodes };
        }
      );

      return { dimension: uniqueName, charactersByDimensionAliveLastSeen };
    }
    default: {
      return state;
    }
  }
};
