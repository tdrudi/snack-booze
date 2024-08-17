import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./FoodItem";
import ItemContext from "./itemContext";
import AddItemForm from "./AddItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //Get and set drinks and snacks, then set laoding to false
  useEffect(() => {
    async function getItems() {
      let snack = await SnackOrBoozeApi.getSnacks();
      setSnacks(snack);

      let drink = await SnackOrBoozeApi.getDrinks();
      setDrinks(drink);
      setIsLoading(false);
    }
    getItems();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <ItemContext.Provider value={{ drinks, setDrinks, snacks, setSnacks }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/:itemType">
                <Menu />
              </Route>
              <Route path="/:itemType/:id">
                <Snack />
              </Route>
              <Route>
                <AddItemForm />
              </Route>
              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </ItemContext.Provider>
  );
}

export default App;
