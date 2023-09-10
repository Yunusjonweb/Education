import Axios from 'axios';
import { store } from '../store';
import { handleLoading } from 'store/slices/auth';
import { toast } from 'react-toastify';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use((configs: any) => {
  store.dispatch(handleLoading(true));
  return configs;
});

axios.interceptors.response.use(
  (res: any) => {
    store.dispatch(handleLoading(false));
    if (res?.data?.errors) {
      toast.error(res?.data?.message?.message);
    }
    return res;
  },
  (error: any) => {
    store.dispatch(handleLoading(false));
    toast.error(error?.message);
    return Promise.reject(error);
  },
);

Axios.interceptors.request.use((configs: any) => {
  store.dispatch(handleLoading(true));
  return configs;
});

Axios.interceptors.response.use(
  (res: any) => {
    store.dispatch(handleLoading(false));
    return res;
  },
  (error: any) => {
    store.dispatch(handleLoading(false));
    return Promise.reject(error);
  },
);

export default axios;
