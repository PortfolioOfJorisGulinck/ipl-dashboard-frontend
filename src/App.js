import { TeamPage } from "./pages/TeamPage.jsx";
import { MatchPage } from "./pages/MatchPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { teamRoute, matchRoute, homeRoute } from "./routes";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`${teamRoute}/:teamName${matchRoute}/:year`}>
            <MatchPage />
          </Route>
          <Route path={`${teamRoute}/:teamName`}>
            <TeamPage />
          </Route>
          <Route path={homeRoute}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
