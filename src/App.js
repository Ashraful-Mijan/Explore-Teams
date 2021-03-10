import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ExploreTeams from './Components/ExploreTeams/ExploreTeams';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path='/ExploreTeams'>
          <ExploreTeams />
          <Footer />
        </Route>
        <Route exact path='/'>
          <ExploreTeams />
          <Footer />
        </Route>
        <Route path='/team/:idTeam'>
          <TeamDetails />
          <Footer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
