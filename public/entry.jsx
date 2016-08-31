import App from './app.jsx';
import Article from './component/blog.jsx';
import Display from './component/display.jsx';
import IndexPage from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
const router = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path='/blog' component={Article}/>
    <Route path='/display' component={Display}/>

  </Route>
</Router>;
ReactDOM.render(
    router,
    document.getElementById("content")
);
console.log($('#content').text());
if (module.hot) {
  module.hot.accept();
}