const initialState = {
  searchField: "",
  articles:[]
}

export const rootReducer = (state=initialState, action={}) => {
  switch(action.type){
    case "CHANGE_SEARCH_FIELD":
      return Object.assign({}, state, {searchField:action.payload})
      case "CHANGE_ARTICLES":
        return Object.assign({}, state, {articles:action.payload})
    default:
      return state
  }
}
