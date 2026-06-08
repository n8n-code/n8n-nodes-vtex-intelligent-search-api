import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { autocompleteDescription } from './resources/autocomplete';
import { productListPageDescription } from './resources/product-list-page';

export class VtexIntelligentSearchApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-intelligent-search-api',
		name: 'N8nDevVtexIntelligentSearchApi',
		icon: { light: 'file:./vtex-intelligent-search-api.svg', dark: 'file:./vtex-intelligent-search-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '>ℹ️ Onboarding guide',
		defaults: { name: 'vtex-intelligent-search-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexIntelligentSearchApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Autocomplete",
					"value": "Autocomplete",
					"description": ""
				},
				{
					"name": "Product List Page",
					"value": "Product List Page",
					"description": ""
				}
			],
			"default": ""
		},
		...autocompleteDescription,
		...productListPageDescription
		],
	};
}
