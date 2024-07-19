import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Additional from './components/Additional';

function App() {
  return (
    <Router basename="/<your-repo-name>">
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/additional" component={Additional} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
