import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from './routes.js';

const fetchData = createAsyncThunk(
  'fetchData',
  async (authUser) => {
    const response = await axios.get(routes.dataPath(), {
      headers: {
        Authorization: `Bearer ${authUser.token}`,
      },
    });

    return response.data;
  },
);

export default fetchData;
