const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const HackerNewsSearchReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "SEARCH_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Search error, unable to get data",
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.hits,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default HackerNewsSearchReducer;
