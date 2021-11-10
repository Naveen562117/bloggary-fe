import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@react-page/core/lib/index.css';
import '@react-page/ui/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/plugins-background/lib/index.css';

import { SimpleExample } from './Editor/SimpleExample';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';
import { useAuth } from './Store/authStore';


const ReactPageExamples = () => {
  const { auth } = useAuth()
  return (
    <Router>
      {!auth ? <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/:id">
          <SimpleExample />
        </Route>
      </Switch>
        :
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/editor">
            <SimpleExample />
          </Route> 
        <Route exact path="/editor/:id">
          <SimpleExample />
        </Route>
        </Switch>
      }
    </Router>
  );
};

ReactDOM.render(<ReactPageExamples />, document.getElementById('root'));
