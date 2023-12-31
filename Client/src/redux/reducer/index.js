import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === payload
        ),
      };

    case ORDER:
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          if (payload === "A") {
            return a.id - b.id;
          } else if (payload === "D") {
            return b.id - a.id;
          } else {
            return 0;
          }
        }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
