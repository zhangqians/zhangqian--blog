import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import apiRoute from './api/api';
import bodyParser from 'body-parser';
import db from './db/db';
import {Article} from './db/schema';
const app = express();
app.use(bodyParser.json());
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(express.static('./public'));

app.delete('/texts/:id', function(req, res, next) {
  const id = req.params.id;
  Article.find({_id:id}).remove((err, data)=>{
    if(err) return next(err);
    if(data) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });
});


app.get('/hello', function(req, res) {
  res.send('Hello, world!');
});
app.use('/api',apiRoute);
app.listen(3000, function() {
  db.connect();
  console.log('Listening on 3000');
});
export default  app;