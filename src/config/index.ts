import development from '../environments/development';
import production from '../environments/production';

export type EnvType = typeof development;
const env = process.env.REACT_APP_ENVIRONMENT;
let environment: EnvType;

const initialize = () => {
	let envObj: EnvType;

	switch (env) {
		case 'production':
			envObj = production;
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
}

initialize();
const configService = new ConfigService();
export default configService;
