const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "config.env" });
const Recipes = require("./models/Recipes");
const Users = require("./models/User");
const {graphiqlExpress, graphqlExpress}=require('apollo-server-express');
const {makeExecutableSchema}=require('graphql-tools');
const {typeDefs}=require('./schema');
const {resolvers}=require('./resolvers')
const schema=makeExecutableSchema({
typeDefs,
resolvers,
})

mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.error(err));
const PORT = process.env.PORT || 5000;
app.use('/graphiql',graphiqlExpress({endpointUrl:'/graphql'}));
app.use('/graphql',graphqlExpress({
schema,
context:{
Recipes,
Users,
}
}))
app.listen(PORT, () => console.log(`server running on port ${PORT} `));
