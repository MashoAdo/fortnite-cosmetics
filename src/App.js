import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Nav from './nav';
import About from './about';
import Home from './Home';
import Cosmetics from './cosmetics';
import Item from './IndvidualCosmetic';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Cosmetics" exact component={Cosmetics}/>
    <Route path="/Cosmetics/:id" component={Item}/>
    </Switch>
    </div>
    </Router>
  );
}

 export default App;
