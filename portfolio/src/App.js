import './App.css';
import 'normalize.css';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <HashRouter hashType="noslash">
      <Menu />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">

        </Route>
        <Route path="/mywork">

        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter> 
  );
}

export default App;
