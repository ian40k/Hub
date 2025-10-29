const axios = require('axios');

class MovieSearch {
  constructor() {
    // You can get free API key from OMDB API
    this.apiKey = process.env.OMDB_API_KEY || 'free_key';
    this.baseURL = 'http://www.omdbapi.com';
  }

  async search(query) {
    try {
      // Using OMDB API for movie search
      const response = await axios.get(this.baseURL, {
        params: {
          apikey: this.apiKey,
          s: query,
          type: 'movie',
          page: 1
        }
      });

      if (response.data.Response === 'True') {
        return response.data.Search.slice(0, 5);
      } else {
        // Fallback to mock data if API fails
        return this.getMockMovies(query);
      }
    } catch (error) {
      console.error('Movie search error:', error);
      // Return mock data if API call fails
      return this.getMockMovies(query);
    }
  }

  getMockMovies(query) {
    return [
      {
        Title: `${query} (2023)`,
        Year: '2023',
        imdbID: 'tt1234567',
        Type: 'movie',
        Poster: ''
      },
      {
        Title: `${query} 2: The Sequel`,
        Year: '2024', 
        imdbID: 'tt1234568',
        Type: 'movie',
        Poster: ''
      }
    ];
  }

  async getMovieDetails(imdbID) {
    try {
      const response = await axios.get(this.baseURL, {
        params: {
          apikey: this.apiKey,
          i: imdbID,
          plot: 'short'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Movie details error:', error);
      return null;
    }
  }
}

module.exports = MovieSearch;
