'use strict';

const {dialogflow, Suggestions, LinkOutSuggestion} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Which type of response would you like to see next?');
});

/*
app.intent('Default Welcome Intent', (conv) => {
  if (conv.user.storage.sum) {
    conv.ask(`Hi! Your last result was ${conv.user.storage.sum}`);
  } else {
    conv.ask(`Hi! Let's add two numbers.`);
  }
  conv.ask(`What's the first number?`);
});

// [START save_data_between_turns_df]
app.intent('Get First Number', (conv, {firstNum}) => {
  conv.data.firstNum = parseInt(firstNum);
  conv.ask(`Got it, the first number is ${firstNum}.`);
  conv.ask(`What's the second number?`);
});
// [END save_data_between_turns_df]

app.intent('Get Second Number', (conv, {secondNum}) => {
  const sum = conv.data.firstNum + parseInt(secondNum);
  conv.data.sum = sum;
  conv.ask(`Got it, the second number is ${secondNum}.` +
    `The sum of both numbers is ${sum}.`);
  conv.ask(`Should I remember that for next time?`);
});

// [START save_data_across_convs_df]
app.intent('Save Sum', (conv) => {
  if (conv.user.verification === 'VERIFIED') {
    conv.user.storage.sum = conv.data.sum;
    conv.close(`Alright, I'll store that for next time. See you then.`);
  } else {
    conv.close(`I can't save that right now, but we can add ` +
      `new numbers next time!`);
  }
});
// [END save_data_across_convs_df]

// [START clear_user_storage_df]
app.intent('Forget Number', (conv) => {
  conv.user.storage = {};
  conv.ask(`Alright, I forgot your last result.`);
  conv.ask(`Let's add two new numbers. What is the first number?`);
});
// [END clear_user_storage_df]*/


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
