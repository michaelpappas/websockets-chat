'use strict';

const axios = require('axios');
const JOKE_BASE_URL = 'https://icanhazdadjoke.com/';

/** GetJoke:
 * Gets a random joke from the icanhazdadjoke API, returns that joke
 *
 * returns: string
 */

async function getJoke() {
  const response = await axios.get(
    JOKE_BASE_URL,
    {
      headers: {
        "Accept": "application/json",
        "User-Agent": "youssefandmichael"
      }
    }
  );

  return response.data.joke;
}

module.exports = { getJoke };