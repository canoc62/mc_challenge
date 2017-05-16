import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Articles from './Articles';
import Topics from './Topics';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articles' component={Articles} />
        <Route path='/topics' component={Topics} />
      </Switch>
    </main>
  );
}

export default Main;