"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const insert_task = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { task } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newtask = {
    id,
    task,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "task",
    Item: newtask
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newtask),
    };
};

module.exports = {
    handler: insert_task,
};
