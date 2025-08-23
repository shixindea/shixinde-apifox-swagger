import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { zhNavbar, enNavbar, } from './navbar/switch.js'
import { zhSidebar, enSidebar, } from './sidebar/switch.js'
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
    "title": "@shixinde/apifox-swagger",
    "description": "袁果锅开发工具类",
    port: '6688', //端口号
    "dest": "docs",
    base:"/shixinde-utils/",
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
    ],
    lang: 'zh-CN',
    // locales: {
    //     '/': {
    //         selectLanguageName: '简体中文',
    //         title: 'Guoguo-utils',
    //         description: '繁星似海 熠熠生辉',
    //     },
    //     '/en/': {
    //         selectLanguageName: 'English',
    //         title: 'Guoguo-utils',
    //         description: 'my book',
    //     },
    // },

    bundler: viteBundler(),
    theme: defaultTheme({
        // 以下所有配置写在这里！！！
        locales: {
            '/': {
                repo: 'https://github.com/shixindea/shixinde-utils',
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                navbar: zhNavbar,
                sidebar: zhSidebar,
                sidebarDepth: 2,
                notFound: ['没找到', '网页走丢了'],
                backToHome: '返回首页'

            },
            '/en/': {
                repo: 'https://github.com/shixindea/shixinde-utils',
                selectLanguageName: 'English',
                selectLanguageText: 'Language',
                navbar: enNavbar,
                sidebar: zhSidebar,
                

            }
        }

    }),
    plugins: [
        searchProPlugin({
            indexContent: true,
            hotReload: true,
        }),
    ]


})