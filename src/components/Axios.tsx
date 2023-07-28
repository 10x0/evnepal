import axios from 'axios';

const searchSuggest = `https://api.mapbox.com/search/searchbox/v1/suggest`;
const searchRetrieve = `https://api.mapbox.com/search/searchbox/v1/retrieve/mapid?access_token&session_token`;

export const searchSuggestions = (query: string) => {
  return axios.get(`${searchSuggest}`, {
    params: {
      q: query,
      access_token: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
      session_token: 'f7a3b5f6-a327-4dc3-8c31-cfc7a63ed3f4',
    },
  });
};
