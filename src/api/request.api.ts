import axios from 'axios';
import ConfigService from '../config';

const instance = axios.create({
	baseURL: ConfigService.apiUrl
});

export default instance;
