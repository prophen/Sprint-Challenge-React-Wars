import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGroup from "./components/CardGroup";
import { Container } from "semantic-ui-react";
import "./App.scss";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersData, setCharactersData] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data.results)
        setCharactersData(response.data.results);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <CardGroup className="card-group" characterArray={charactersData} />
      </Container>
    </div>
  );
};

export default App;
