import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetHackerNewsSearch } from "../actions/HackerNewsActions";

const HackerNewsSearch = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const hackerNewsSearch = useSelector((state) => state.HackerNewsSearch);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (search) => {
    dispatch(GetHackerNewsSearch(search));
  };

  const ShowData = () => {
    if (hackerNewsSearch.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(hackerNewsSearch.data)) {
      let index = 0;
      return (
        <div className={"list-wrapper"}>
          {hackerNewsSearch.data.map((el) => {
            return (
              <div className={"hn-item"} key={index++}>
                <a target="_blank" rel="noopener noreferrer" href={el.url}>
                  <p>Title: {el.title}</p>
                </a>
                <p>Author: {el.author}</p>
              </div>
            );
          })}
        </div>
      );
    }

    if (hackerNewsSearch.errorMsg !== "") {
      return <p>{hackerNewsSearch.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => FetchData(search)}>Search</button>
      </div>
      <div>{ShowData()}</div>
    </div>
  );
};

export default HackerNewsSearch;
