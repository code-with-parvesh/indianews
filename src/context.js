import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoggedIn: false, // ✅ login state
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_STORIES", payload: { hits: data.hits, nbPages: data.nbPages } });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  const getNextPage = () => dispatch({ type: "NEXT_PAGE" });
  const getPrevPage = () => dispatch({ type: "PREV_PAGE" });

  const login = () => dispatch({ type: "LOGIN" });
  const logout = () => dispatch({ type: "LOGOUT" });

  useEffect(() => {
    if (state.isLoggedIn) {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }
  }, [state.query, state.page, state.isLoggedIn]);

  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
