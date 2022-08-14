
// 搜索引擎
const engines = [
    {name: 'ecosia', engine: 'https://www.ecosia.org/search?q='},
    {name: 'google', engine: 'https://www.google.com.hk/search?q='},
    {name: 'baidu', engine: 'https://www.baidu.com/s?wd='},
    {name: 'yandex', engine: 'https://yandex.com/search/?text='}
    
];

// 搜藏列表
const collection = {
    "实用": [
        {
            "name": "高清图库",
            "engine": "https://unsplash.com"
        }
    ],
    "娱乐": [
        {
            "name": "影视解析",
            "engine": "https://svip.bljiex.cc"
        }
    ]
};


export {
    engines,
    collection
}
