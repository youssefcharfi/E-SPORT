import Leages from "./components/Leagues";
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
import League from "./components/League";
import PageNotFound from "./components/PageNotFound";
import './App.css'
import Teams from "./components/Teams";
import Team from "./components/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Router>  
        <Navbar/>
        <Switch>
            <Route exact path="/leagues" component={Leages} />
            <Route exact path="/leagues/:leagueId" component={League}/>
            <Route exact path="/teams" component={Teams}/>
            <Route exact path="/teams/:teamId" component={Team}/>
            <Route exact path="/" >
              <Redirect to="/leagues"/>
            </Route>
            <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
