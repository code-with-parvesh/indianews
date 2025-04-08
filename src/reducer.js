const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return { ...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages };
    case "REMOVE_POST":
      return { ...state, hits: state.hits.filter(post => post.objectID !== action.payload) };
    case "SEARCH_QUERY":
      return { ...state, query: action.payload };
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 >= state.nbPages ? 0 : state.page + 1 };
    case "PREV_PAGE":
      return { ...state, page: state.page <= 0 ? 0 : state.page - 1 };
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default reducer;
