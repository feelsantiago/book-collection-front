import development from '../environments/development';
import production from '../environments/production';
import uat from '../environments/uat';

export type EnvType = typeof development;
const env = process.env.REACT_APP_ENVIRONMENT;
let environment: EnvType;

const initialize = () => {
	let envObj: EnvType;

	switch (env) {
		case 'production':
			envObj = production;
			break;
		case 'uat':
			envObj = uat;
			break;
		default:
			envObj = development;
			break;
	}

	environment = envObj;
	return envObj;
};

class ConfigService {
	constructor () {}

	get apiUrl () {
		return environment.api_url;
	}

	get cubeApiUrl () {
		return environment.cube_api_url;
	}

	get cubeJsToken () {
		return environment.cube_js_token;
	}
}

initialize();
const configService = new ConfigService();
export default configService;
