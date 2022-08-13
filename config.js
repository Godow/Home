
// 搜索引擎
const engines = [
    {name: 'baidu', engine: 'https://www.baidu.com/s?wd='},
    {name: 'yandex', engine: 'https://yandex.com/search/?text='},
    {name: 'ecosia', engine: 'https://www.ecosia.org/search?q='},
    {name: 'google', engine: 'https://www.google.com.hk/search?q='}
];

// 搜藏列表
const collection = {
    "娱乐": [
        {
            "name": "影视解析",
            "engine": "https://svip.bljiex.cc"
        }
    ],
    "实用": [
        {
            "name": "高清图库",
            "engine": "https://unsplash.com"
        }
    ]
};


export {
    engines,
    collection
}
