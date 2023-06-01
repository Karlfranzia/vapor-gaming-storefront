import axios from 'axios';

    export const topRated = async () => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?ordering=-rating&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data.results;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const newReleases = async () => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?ordering=released&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const searchGame = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?search=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const byTag = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?tags=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const byGenre = async (query) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games?genres=${query}&key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const gameDetails = async (id) => {
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

      const gameTrailers = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/movies?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      };

      const gameReddit = async (id) => {
        try {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${id}/reddit?key=f56734a274854d6194e9c70972796b6e`
          );
          return response.data;
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
        gameReddit
      };

export default API