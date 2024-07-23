// import axios from 'axios';

// const API_KEY = '44811983-8684438ea32399a5b651fd4bf';
// const BASE_URL = 'https://pixabay.com/api/';

// export async function fetchImages(query, page = 1, perPage = 15) {
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: perPage,
//   };

//   try {
//     const response = await axios.get(BASE_URL, { params });
//     return {
//       images: response.data.hits,
//       total: response.data.totalHits,
//     };
//   } catch (error) {
//     throw new Error('Error fetching images from Pixabay API');
//   }
// }

import axios from 'axios';

const API_KEY = '44811983-8684438ea32399a5b651fd4bf';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return {
      images: response.data.hits,
      total: response.data.totalHits,
    };
  } catch (error) {
    throw new Error('Error fetching images from Pixabay API');
  }
}

