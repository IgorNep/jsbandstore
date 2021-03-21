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

  async getData(endpoint) {
    const res = await axios.get(`${this.baseUrl}${this.endpoints[endpoint]}`);
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

const apiService = new ApiService('https://js-band-api.glitch.me', ENDPOINTS);

export default apiService;
