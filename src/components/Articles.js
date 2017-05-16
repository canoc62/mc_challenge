import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';

const Articles = ({ match }) => {
  console.log('match: ', match);
    return (
      <Switch>
        <Route path={`/${match.url}/articleDetail`} component={ArticleDetail} />
        <Route path={`/${match.url}/:article_id`} component={ArticleDetail} />
        <Route exact path={`${match.url}`} component={ArticlesList} />
      </Switch>
    );
}

export default Articles;