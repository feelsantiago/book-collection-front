/* globals window */
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
import { DashboardItem, typeDefs } from './types';

const cache = new InMemoryCache();
const defaultDashboardItems: Array<DashboardItem> = [];

const getItemsOnLocalStorage = (key: string) => {
	const items = window.localStorage.getItem(key);
	return items ? items : '';
};

const getDashboardItems = () => {
	try {
		return JSON.parse(getItemsOnLocalStorage('dashboardItems'));
	} catch (error) {
		return defaultDashboardItems;
	}
};

const setDashboardItems = (items: DashboardItem) =>
	window.localStorage.setItem('dashboardItems', JSON.stringify(items));

const nextId = () => {
	const currentId = parseInt(getItemsOnLocalStorage('dashboardIdCounter'), 10) || 1;
	window.localStorage.setItem('dashboardIdCounter', (currentId + 1).toString());
	return currentId.toString();
};

const toApolloItem = (i: DashboardItem) => ({ ...i, __typename: 'DashboardItem' });

const schema = makeExecutableSchema({
	typeDefs,
	resolvers: {
		Query: {
			dashboardItems () {
				const dashboardItems = getDashboardItems();
				return dashboardItems.map(toApolloItem);
			},

			dashboardItem (_, { id }) {
				const dashboardItems = getDashboardItems();
				return toApolloItem(dashboardItems.find((i: DashboardItem) => i.id.toString() === id));
			}
		},
		Mutation: {
			createDashboardItem: (_, { input: { ...item } }) => {
				const dashboardItems = getDashboardItems();
				item = { ...item, id: nextId(), layout: JSON.stringify({}) };
				dashboardItems.push(item);
				setDashboardItems(dashboardItems);
				return toApolloItem(item);
			},
			updateDashboardItem: (_, { id, input: { ...item } }) => {
				const dashboardItems = getDashboardItems();
				item = Object.keys(item)
					.filter((k) => !!item[k])
					.map((k) => ({
						[k]: item[k]
					}))
					.reduce((a, b) => ({ ...a, ...b }), {});
				const index = dashboardItems.findIndex((i: DashboardItem) => i.id.toString() === id);
				dashboardItems[index] = { ...dashboardItems[index], ...item };
				setDashboardItems(dashboardItems);
				return toApolloItem(dashboardItems[index]);
			},
			deleteDashboardItem: (_, { id }) => {
				const dashboardItems = getDashboardItems();
				const index = dashboardItems.findIndex((i: DashboardItem) => i.id.toString() === id);
				const [ removedItem ] = dashboardItems.splice(index, 1);
				setDashboardItems(dashboardItems);
				return toApolloItem(removedItem);
			}
		}
	}
});

export default new ApolloClient({
	cache,
	link: new SchemaLink({
		schema
	})
});
