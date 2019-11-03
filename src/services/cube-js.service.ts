import cubejs from '@cubejs-client/core';
import ConfigService from '../config';

const cubejsApi = cubejs(ConfigService.cubeJsToken, {
	apiUrl: `${ConfigService.cubeApiUrl}/cubejs-api/v1`
});

export default cubejsApi;
