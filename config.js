
// 搜索引擎
const engines = [
    {name: 'ecosia', engine: 'https://www.ecosia.org/search?q='},
    {name: 'google', engine: 'https://www.google.com.hk/search?q='},
    {name: 'baidu', engine: 'https://www.baidu.com/s?wd='},
    {name: 'yandex', engine: 'https://yandex.com/search/?text='}
    
];

// 搜藏列表
const collection = {
    "资源": [
        {
            "name": "高清图库",
            "engine": "https://unsplash.com"
        }
    ],
    "工具": [
        {
            "name": "影视解析",
            "engine": "https://svip.bljiex.cc"
        },
        {
            "name": "Greasy Fork",
            "engine": "https://greasyfork.org/zh-CN"
        },
        {
            "name": "万能命令",
            "engine": "https://wn.run"
        },
        {
            "name": "MikuTools",
            "engine": "https://tools.miku.ac"
        }
    ]
};


export {
    engines,
    collection
}
