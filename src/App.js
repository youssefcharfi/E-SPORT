import Leages from "./components/Leagues";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import League from "./components/League";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Teams from "./components/Teams";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { leaguesContext } from "./LeaguesContext";

function App() {
  const [gameVideo, setGameVideo] = useState("");

  return (
    <leaguesContext.Provider value={gameVideo}>
      <div className="app">
        <Router>
          <Navbar setGameVideo={setGameVideo} />
          <Switch>
            <Route exact path="/leagues" component={Leages} />
            <Route exact path="/leagues/:leagueId" component={League} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:teamId" component={Team} />
            <Route exact path="/">
              <Redirect to="/leagues" />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </leaguesContext.Provider>
  );
}

export default App;
