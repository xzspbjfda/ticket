export default [{
		name: '推荐排序',
		"type": 'hierarchy',
		"submenu": [{
			"name": "推荐排序",
			"value": "0"
		}, {
			"name": "距离优先",
			"value": "4"
		}, {
			"name": "好评优先",
			"value": "3"
		}, {
			"name": "低价优先",
			"value": "1"
		}, {
			"name": "高价优先",
			"value": "2"
		}]
	},
	{
		// name:'价格',
		"type": 'filter',
		"submenu": [{
			"name": "星级",
			"submenu": [{
					"name": "二星经济",
					"value": "2"
				},
				{
					"name": "三星舒适",
					"value": "3"
				},
				{
					"name": "四星高档",
					"value": "4"
				},
				{
					"name": "五星豪华",
					"value": "5"
				}
			]
		}, ]
	}
]