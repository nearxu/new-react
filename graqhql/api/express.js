var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// 使用 GraphQL Schema Language 创建一个 schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var schema1 = buildSchema(
  `
    type Query{
      name:String
      age:Float!
    }
  `
)

// root 提供所有 API 入口端点相应的解析器函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
  name:() => {
    return 'tom'
  },
  age:() => {
    return Math.random()
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema1,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');