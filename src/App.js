import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Artists from './containers/artists'
import Todo from './containers/todo'
import Posts from './containers/posts';
import Todos from './containers/todos';
import Comments from './containers/comments'
import Main from './containers/main'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`/artists`} component={Artists} />
          <Route exact path={`/artists/:id`} component={Todo} />
          <Route exact path={`/posts`} component={Posts} />
          <Route exact path={`/posts/:id`} component={Todos} />
          <Route exact path={`/`} component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
