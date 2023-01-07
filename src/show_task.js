"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const show_task = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let task;

  try{
  const result = await dynamoDb.scan({
    TableName: "task"
  }).promise();
  test = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(task),
    };
};

module.exports = {
    handler: show_task,
};
