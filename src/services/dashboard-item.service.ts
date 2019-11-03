import { DashboardItem } from '../graphql/types';

class DashboardItemService {
	deserializeItem (item: DashboardItem) {
		return {
			...item,
			layout: JSON.parse(item.layout as any) || {},
			vizState: JSON.parse(item.vizState as any)
		};
	}

	defaultLayout = (item: DashboardItem) => ({
		x: item.layout.x || 0,
		y: item.layout.y || 0,
		w: item.layout.w || 4,
		h: item.layout.h || 8,
		minW: 4,
		minH: 8
	});
}

const service = new DashboardItemService();
export default service;
