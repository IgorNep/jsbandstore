import axios from 'axios';
import ENDPOINTS from './endpoints';

const getConfig = () => ({
  headers: {
    'Content-type': 'application/json',
  },
});

class ApiService {
  constructor(baseUrl, endpoints) {
    if (ApiService.isExist) {
      return ApiService.instance;
    }
    ApiService.instance = this;
    ApiService.isExist = true;
    this.endpoints = endpoints;
    this.baseUrl = baseUrl;
  }

  async getData(endpoint, config) {
    const res = await axios.get(
      `${this.baseUrl}${this.endpoints[endpoint]}`,
      config
    );
    return res.data;
  }

  async getDataById(endpoint, id, config) {
    const res = await axios.get(
      `${this.baseUrl}${this.endpoints[endpoint]}/${id}`,
      config
    );
    return res.data;
  }

  async postData(endpoint, formData, params) {
    const config = getConfig();
    const newParams = { ...params, config };
    const res = await axios.post(
      `${this.baseUrl}${this.endpoints[endpoint]}`,
      formData,
      newParams
    );
    return res.data;
  }
}

const apiService = new ApiService(
  'https://js-band-store-api.glitch.me',
  ENDPOINTS
);

export default apiService;
