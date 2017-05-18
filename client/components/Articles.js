import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';

const Articles = ({ match }) => {
  console.log('match url: ', match.url);
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={ArticlesList} />
        <Route path='/articles/:id' component={ArticleDetail} />
      </Switch>
    );
}

export default Articles;