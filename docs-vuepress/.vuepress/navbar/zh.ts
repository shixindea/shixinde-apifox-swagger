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
]
