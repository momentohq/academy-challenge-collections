const axios = require('axios').default;

exports.validateAnswers = async (username, email) => {
  const config = {
    method: 'POST',
    baseURL: 'https://oql6o4witl.execute-api.us-east-1.amazonaws.com/dev/challenges/collections',
    body: {},
    headers: {
      Authorization: `Bearer ${process.env.MOMENTO_AUTH_TOKEN}`,
      "x-momento-username": username,
      "x-momento-email": email,
      "x-momento-event": 'serverless-anz'
    },
    responseType: 'json',
    validateStatus: (status) => status < 400
  };

  const response = await axios.request(config);
  return response.data;
}