import type { INodeProperties } from 'n8n-workflow';

export const autocompleteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					]
				}
			},
			"options": [
				{
					"name": "GET Autocomplete Suggestions",
					"value": "GET Autocomplete Suggestions",
					"action": "Get list of suggested terms and attributes similar to the search term",
					"description": "Lists the suggested terms and attributes similar to the search term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/autocomplete_suggestions"
						}
					}
				},
				{
					"name": "GET Top Searches",
					"value": "GET Top Searches",
					"action": "Get list of the 10 most searched terms",
					"description": "Lists the 10 most searched terms.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/top_searches"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /autocomplete_suggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					],
					"operation": [
						"GET Autocomplete Suggestions"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Search term. It can contain any character.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					],
					"operation": [
						"GET Autocomplete Suggestions"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.",
			"default": "en-US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					],
					"operation": [
						"GET Autocomplete Suggestions"
					]
				}
			}
		},
		{
			"displayName": "GET /top_searches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					],
					"operation": [
						"GET Top Searches"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.",
			"default": "en-US",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Autocomplete"
					],
					"operation": [
						"GET Top Searches"
					]
				}
			}
		},
];
