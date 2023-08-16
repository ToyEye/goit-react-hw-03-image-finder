import axios from 'axios';

const KEY = '24201171-f795c334c12b489d5c6645c6d';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  try {
    const { data } = await axios.get(`?q=${query}&page=${page}`);

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
