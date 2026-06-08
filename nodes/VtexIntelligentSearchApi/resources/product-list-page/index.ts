import type { INodeProperties } from 'n8n-workflow';

export const productListPageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					]
				}
			},
			"options": [
				{
					"name": "GET Banners",
					"value": "GET Banners",
					"action": "Get list of banners registered for query",
					"description": "Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/banners/{{$parameter[\"facets\"]}}"
						}
					}
				},
				{
					"name": "GET Correction Search",
					"value": "GET Correction Search",
					"action": "Get attempt of correction of a misspelled term",
					"description": "Tries to correct a misspelled term from the search.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/correction_search"
						}
					}
				},
				{
					"name": "GET Facets",
					"value": "GET Facets",
					"action": "Get list of the possible facets for a given query",
					"description": "Lists the possible facets for a given query",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/facets/{{$parameter[\"facets\"]}}"
						}
					}
				},
				{
					"name": "GET Product Search",
					"value": "GET Product Search",
					"action": "Get list of products for a query",
					"description": "Lists the products for a given query.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/product_search/{{$parameter[\"facets\"]}}"
						}
					}
				},
				{
					"name": "GET Search Suggestions",
					"value": "GET Search Suggestions",
					"action": "Get list of suggested terms similar to the search term",
					"description": "Lists suggested terms similar to the search term.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search_suggestions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /banners/{facets}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Banners"
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
						"Product List Page"
					],
					"operation": [
						"GET Banners"
					]
				}
			}
		},
		{
			"displayName": "Facets",
			"name": "facets",
			"required": true,
			"description": "# Format\n\nThe `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.\n\nThe order in which the terms appear is not relevant to the search.\n\nYou can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`\n\n# General filters\n\nThe `facets` parameter also allows the following general filters.\n\n| `facetKey`      | Description                                                                                      | Example                                                                  |\n| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |\n| `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |\n| `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |\n",
			"default": "category-1/clothing/category-2/shirt/category-3/man",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Banners"
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
						"Product List Page"
					],
					"operation": [
						"GET Banners"
					]
				}
			}
		},
		{
			"displayName": "GET /correction_search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Correction Search"
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
						"Product List Page"
					],
					"operation": [
						"GET Correction Search"
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
						"Product List Page"
					],
					"operation": [
						"GET Correction Search"
					]
				}
			}
		},
		{
			"displayName": "GET /facets/{facets}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Facets"
					]
				}
			}
		},
		{
			"displayName": "Facets",
			"name": "facets",
			"required": true,
			"description": "# Format\n\nThe `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.\n\nThe order in which the terms appear is not relevant to the search.\n\nYou can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`\n\n# General filters\n\nThe `facets` parameter also allows the following general filters.\n\n| `facetKey`      | Description                                                                                      | Example                                                                  |\n| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |\n| `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |\n| `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |\n",
			"default": "category-1/clothing/category-2/shirt/category-3/man",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Facets"
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
						"Product List Page"
					],
					"operation": [
						"GET Facets"
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
						"Product List Page"
					],
					"operation": [
						"GET Facets"
					]
				}
			}
		},
		{
			"displayName": "Hide Unavailable Items",
			"name": "hideUnavailableItems",
			"description": "Whether the result should hide unavailable items (`true`), or not (`false`)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "hideUnavailableItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Facets"
					]
				}
			}
		},
		{
			"displayName": "GET /product_search/{facets}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Facets",
			"name": "facets",
			"required": true,
			"description": "# Format\n\nThe `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.\n\nThe order in which the terms appear is not relevant to the search.\n\nYou can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`\n\n# General filters\n\nThe `facets` parameter also allows the following general filters.\n\n| `facetKey`      | Description                                                                                      | Example                                                                  |\n| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |\n| `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |\n| `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |\n",
			"default": "category-1/clothing/category-2/shirt/category-3/man",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
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
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Simulation Behavior",
			"name": "simulationBehavior",
			"description": "Defines the simulation behavior.\n\n * `default` - Calls the simulation for every single seller.\n * `skip` - Never calls the simulation.\n * `only1P` - Only calls the simulation for first party sellers.",
			"default": "default",
			"type": "options",
			"options": [
				{
					"name": "Default",
					"value": "default"
				},
				{
					"name": "Skip",
					"value": "skip"
				},
				{
					"name": "Only 1 P",
					"value": "only1P"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "simulationBehavior",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of products per page.",
			"default": 24,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Current search page.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Defines the sort type. If null, the products will be sorted by relevance.",
			"default": "price:desc",
			"type": "options",
			"options": [
				{
					"name": "Price Desc",
					"value": "price:desc"
				},
				{
					"name": "Price Asc",
					"value": "price:asc"
				},
				{
					"name": "Orders Desc",
					"value": "orders:desc"
				},
				{
					"name": "Name Desc",
					"value": "name:desc"
				},
				{
					"name": "Name Asc",
					"value": "name:asc"
				},
				{
					"name": "Release Desc",
					"value": "release:desc"
				},
				{
					"name": "Discount Desc",
					"value": "discount:desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
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
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "Hide Unavailable Items",
			"name": "hideUnavailableItems",
			"description": "Whether the result should hide unavailable items (`true`), or not (`false`)",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "hideUnavailableItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Product Search"
					]
				}
			}
		},
		{
			"displayName": "GET /search_suggestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product List Page"
					],
					"operation": [
						"GET Search Suggestions"
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
						"Product List Page"
					],
					"operation": [
						"GET Search Suggestions"
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
						"Product List Page"
					],
					"operation": [
						"GET Search Suggestions"
					]
				}
			}
		},
];
