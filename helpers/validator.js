const axios = require('axios').default;
const challengeKey = 'collections';

exports.validateAnswers = async () => {
  const config = {
    method: 'POST',
    baseURL: `https://lxbmet6mh8.execute-api.us-east-1.amazonaws.com/dev/challenges/${challengeKey}`,
    body: {},
    headers: {
      Authorization: `Bearer ${process.env.MOMENTO_AUTH_TOKEN}`
    },
    responseType: 'json',
    validateStatus: (status) => status < 400
  };

  const response = await axios.request(config);
  return response.data;
}