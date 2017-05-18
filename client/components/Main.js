import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import Articles from './Articles';
import ArticlesList from './../containers/ArticlesList';
import ArticleDetail from './../containers/ArticleDetail';
import Topics from './../containers/Topics';

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