export const zhNavbar = [
    {
        text: '主页',
        link: '/'
    },
    {
        text: '快速开始',
        link: '/quick-start'
    },
    {
        text: '使用指南',
        children: [
            {
                text: '安装指南',
                link: '/installation'
            },
            {
                text: '命令行工具',
                link: '/cli'
            },
            {
                text: '编程接口',
                link: '/api'
            },
            {
                text: 'TypeScript 类型工具',
                link: '/typescript'
            }
        ]
    },
    {
        text: '配置与故障排除',
        children: [
            {
                text: '配置参考',
                link: '/configuration'
            },
            {
                text: '故障排除',
                link: '/troubleshooting'
            }
        ]
    },
    //两层嵌套
    // {
    //     text: '语言',
    //     children:
    //         [
    //             {
    //                 text: '程序',
    //                 children:
    //                     [
    //                         { text: 'C', link: 'https://code.iglooblog.top/c/1.html' },
    //                         { text: '模板文件', link: '/theme-reco/api' }
    //                     ]
    //             },
    //             {
    //                 text: '标记',
    //                 children:
    //                     [
    //                         { text: 'HTML', link: 'https://code.iglooblog.top/html/1.html' },
    //                         { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
    //                         { text: 'CSS', link: 'https://code.iglooblog.top/css/1.html' }
    //                     ]
    //             },
    //         ],
    // },
    //多个条目
    // {
    //     text: '课程',
    //     children: [
    //         { text: '政治', link: 'politics' },
    //         { text: '英语', link: 'english' }
    //     ],
    // },
    // {
    //     text: '关于',
    //     link: '/about',
    // },

    // 字符串 - 页面文件路径
    // '/Guide/README.md',
]
