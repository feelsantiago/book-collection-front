export enum ChartTypes {
	line = 'line',
	bar = 'bar',
	area = 'area',
	pie = 'pie',
	table = 'table',
	number = 'number'
}

export interface VizState {
	query: string;
	chartType: ChartTypes;
}

export interface DashboardItem {
	id: string;
	layout: { x: number; y: number; w: number; h: number };
	vizState: VizState;
	name: string;
}

export interface DashboardItemInput {
	layout: string;
	vizState: string;
	name: string;
}

export interface Query {
	dashboardItems: [DashboardItem];
	dashboardItem(id: string): DashboardItem;
}

export interface Mutation {
	createDashboardItem(input: DashboardItemInput): DashboardItem;
	updateDashboardItem(id: string, input: DashboardItemInput): DashboardItem;
	deleteDashboardItem(id: string): DashboardItem;
}

export const typeDefs = `
  type DashboardItem {
    id: String!
    layout: String
    vizState: String
    name: String
  }

  input DashboardItemInput {
    layout: String
    vizState: String
    name: String
  }

  type Query {
    dashboardItems: [DashboardItem]
    dashboardItem(id: String!): DashboardItem
  }

  type Mutation {
    createDashboardItem(input: DashboardItemInput): DashboardItem
    updateDashboardItem(id: String!, input: DashboardItemInput): DashboardItem
    deleteDashboardItem(id: String!): DashboardItem
  }
`;
