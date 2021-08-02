export const setSearch = (text) => ({
  type: "CHANGE_SEARCH_FIELD",
  payload: text
}
)

export const setArticles = (data) => ({
  type: "CHANGE_ARTICLES",
  payload: data
}
)
