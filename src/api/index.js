import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from 'react-native-dotenv';

const baseURL = {
  baseURL: BASE_URL,
};

const axiosInstance: typeof AxiosInstance = axios.create(baseURL);

export default axiosInstance;
