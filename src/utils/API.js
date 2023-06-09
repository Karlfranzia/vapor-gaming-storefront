import axios from 'axios';

    export const topRated = async () => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?metacritic=80,100&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const newReleases = async () => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?ordering=released&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const searchGame = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?search=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const byTag = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?tags=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const byGenre = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?genres=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const gameDetails = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const gameTrailers = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/movies?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const gameReddit = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/reddit?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      export const gameScreenshotsAPI = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/screenshots?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const API = {
        topRated,
        newReleases,
        searchGame,
        byTag, 
        byGenre, 
        gameDetails, 
        gameTrailers, 
        gameReddit,
        gameScreenshotsAPI
      };

export default API