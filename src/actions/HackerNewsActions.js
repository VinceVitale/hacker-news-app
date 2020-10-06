import axios from "axios";

export const GetHackerNewsSearch = (search) => async (dispatch) => {
  try {
    dispatch({
      type: "SEARCH_LOADING",
    });

    const res = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${search}`
    );

    dispatch({
      type: "SEARCH_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "SEARCH_FAIL",
    });
  }
};
