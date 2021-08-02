import logo from './logo.svg';
import './App.css';
import News from "./components/news/news"
import {setSearch} from "./actions"
import {useSelector, useDispatch} from "react-redux"


function App({store}) {
  const searchField = useSelector(state => state.searchField)
  const dispatch = useDispatch()
  console.log("searchField", searchField)
  return (
    <div className="App">
      <News/>
    </div>
  );
}

export default App;
