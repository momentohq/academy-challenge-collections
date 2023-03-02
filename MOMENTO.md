# Booth Instructions

Momento employees, please follow the steps outlined below when running the booth.

1. Create a `.env` file in the root directory with a value `MOMENTO_AUTH_TOKEN` and **your Momento auth token**
  1. You will not need to change this throughout the conference. But we specifically need a token that is assigned to someone with an `@momentohq.com` email
2. After each participant, discard any changes or do a git reset.
3. Bring up the leaderboard by [going to this site](https://main.dyylgkl0zhy4y.amplifyapp.com/)
  1. You will need to sign in with your Momento auth token again
  2. After you sign in with your auth token, go to [this leaderboard](https://main.dyylgkl0zhy4y.amplifyapp.com/challenges/collections?event=serverless-anz) which will be scoped specifically to people running the challenge out of this booth.
4. Don't forget this is all cached data, it will expire after 24 hours.

## Raffle

Run the raffle by clicking the Acorn icon in the top right of the screen

  1. This will persist all the users in the cache to DynamoDB so we don't lose any contact information
  2. It will also randomly select the raffle winner - the more points they score and fewer attempts they make, the higher the likelihood of winning!