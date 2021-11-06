const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  "mongodb://127.0.0.1:27017/lyricaldb?retryWrites=true&w=majority";

if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.connect(MONGO_URI)
  .then(() =>console.log('connected to mongodb'))
  .catch((err) => console.log('error connecting to mongo lab:', err.message))


app.use(express.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3000, () => console.log("app listening on 3000"));

module.exports = app;
