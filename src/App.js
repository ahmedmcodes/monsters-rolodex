import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// const App = () => {
//   return <h1>Hello World</h1>;
// };

const App = () => {
  const [originalMonsters, setOriginalMonsters] = useState([]);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
        setOriginalMonsters(users);
      });
  }, []);

  return (
    <div className="App">
      <SearchBox
        stateData={{
          monsters,
          setMonsters,
          originalMonsters,
          setOriginalMonsters,
        }}
      />
      <CardList stateData={{ monsters, originalMonsters }} />
    </div>
  );
};

export default App;
