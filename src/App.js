import "./App.css";
import Background from "./components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <CSSTransition>
          <Switch>
            <Route exact path="/">
              <Background />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </CSSTransition>
      </Router>
    </div>
  );
}

export default App;
