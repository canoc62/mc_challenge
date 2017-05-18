import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import Articles from './Articles';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';
import Topics from './Topics';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={ArticlesList} />
        <Route exact path='/articles/:id' component={ArticleDetail} />
        <Route path='/topics' component={Topics} />
      </Switch>
    </main>
  );
}

export default Main;