const axios = require('axios').default;

exports.validateAnswers = async (username) => {
  const config = {
    method: 'POST',
    baseURL: 'https://oql6o4witl.execute-api.us-east-1.amazonaws.com/dev/challenges/collections',
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