import React, {useState, useEffect} from "react"
import Axios from "axios"
import './news.css';
import DataTable from "../table/table"
import { Grid } from '@material-ui/core';
import Search from "../search/search"
import {useSelector, useDispatch} from "react-redux"
import {setSearch, setArticles} from "../../actions"

function News() {
  const search = useSelector(state => state.searchField)
  const articles = useSelector(state => state.articles)
  const dispatch = useDispatch()


  useEffect(() => {
      const articles = async () => {
        const response = await Axios.get("https://newsapi.org/v2/everything?q=bitcoin&pageSize=100&apiKey=8ecc1131a6aa459d818b185af3d1258e")

        dispatch(setArticles(response.data.articles))
      }
    articles()

  },[])



console.log("Articles", articles)
let rows = []
let count = 0
articles.map(article => {
  let row = {id: count, img:<img src={article.urlToImage} alt=""/>, source:article.source.name, author:article.author, title:article.title, date:article.publishedAt.slice(0,10), url:article.url}
  rows.push(row)
  count = count + 1
})

const filtered_rows = rows.filter(row => row.title.toLowerCase().includes(search.toLowerCase()));

console.log("Rows", rows)
console.log("Filtered", filtered_rows)

const onChange = (newValue) => {
  console.log(newValue)
  dispatch(setSearch(newValue))
}

  return (
    <Grid>
    <Grid lg={12} sm={12} xs={12}>
      <Search onChange={onChange}/>
    </Grid>
    <Grid lg={12} sm={12} xs={12}>
      <DataTable rows={filtered_rows}/>
    </Grid>
    </Grid>

  );
}

export default News;
