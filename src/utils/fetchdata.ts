import axios from 'axios';

const url = 'https://api.github.com/search/repositories?q=created:2019-01-10&sort=stars&order=desc';

async function fetchData(count:Number,pageno:Number) {
  try {
    const response = await axios.get(`${url}&per_page=${count}&page=${pageno}`);
    const data = response.data;
    console.log('Fetched data:', data);
    return data;
  } catch (error:any) {
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error if needed
  }
}

export default fetchData;
