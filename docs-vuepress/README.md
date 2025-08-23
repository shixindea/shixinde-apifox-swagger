<br />
<br />
<br />
<br />

<p align="center">
  <a href="https://github.com/shixinde/apifox-swagger/">
       <img src="./.vuepress/public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">@shixinde/apifox-swagger</h3>
  <p align="left" style="text-indent:2em">
   一个强大的 Apifox API 文档导出工具，支持将 Apifox 项目导出为 Swagger JSON 和 TypeScript 类型定义。提供命令行工具和编程接口，让 API 文档管理变得简单高效。
 </p>
  <p align="left" style="text-indent:2em">
  支持多种导出方式：云端项目导出、本地客户端导出、模块化导出等。生成的 TypeScript 类型定义具有完整的类型安全保障，让前端开发更加可靠。
 </p>

让 API 文档管理变得简单，让类型安全成为开发标准！
<a href="./quick-start"><strong>快速开始 »</strong></a>
<br />
<br />
<a href="./installation">安装指南</a>
·
<a href="https://www.npmjs.com/package/@shixinde/apifox-swagger">NPM 包</a>
·
<a href="./cli">命令行工具</a>
·
<a href="https://github.com/shixinde/apifox-swagger/issues">报告 Bug</a>
·
<a href="https://github.com/shixinde/apifox-swagger/issues">提出新特性</a>

</p>
<br />
<br />
<br />


<!-- PROJECT LOGO -->
<br />

## 目录

- [目录](#目录)
  - [简介](#简介)
  - [特性](#特性)
  - [快速开始](#快速开始)
    - [安装](#安装)
    - [基本使用](#基本使用)
  - [使用指南](#使用指南)
  - [配置](#配置)
  - [贡献](#贡献)
  - [相关项目](#相关项目)
  - [许可证](#许可证)
  - [作者](#作者)

### 简介

@shixinde/apifox-swagger 是一个专为 Apifox 用户设计的 API 文档导出工具。它可以将 Apifox 项目中的 API 文档导出为标准的 Swagger JSON 格式和 TypeScript 类型定义文件，让前端开发者能够享受完整的类型安全保障。

该工具支持云端和本地两种导出方式，提供了灵活的配置选项和强大的 TypeScript 类型工具，是现代前端开发的理想选择。


### 特性

- 🚀 **多种导出方式** - 支持云端项目和本地客户端导出
- 📦 **模块化导出** - 支持按文件夹分模块导出，便于大型项目管理
- 🔧 **命令行工具** - 提供简单易用的 CLI 工具
- 💻 **编程接口** - 支持在 Node.js 项目中编程调用
- 🎯 **TypeScript 支持** - 生成完整的类型定义，享受类型安全
- ⚡ **高性能** - 支持并行导出和缓存机制
- 🔄 **CI/CD 集成** - 完美支持各种持续集成环境
- 📝 **丰富配置** - 灵活的配置选项满足不同需求

### 快速开始

#### 安装

```bash
# 使用 npm
npm install -g @shixinde/apifox-swagger

# 使用 yarn
yarn global add @shixinde/apifox-swagger

# 使用 pnpm
pnpm add -g @shixinde/apifox-swagger
```

#### 基本使用

```bash
# 导出 Apifox 项目
apifox-swagger export --project-id YOUR_PROJECT_ID --token YOUR_ACCESS_TOKEN

# 查看帮助
apifox-swagger --help
```

更多详细信息请查看 [快速开始指南](./quick-start.md)。

### 使用指南

我们提供了详细的文档来帮助你快速上手：

- **[安装指南](./installation.md)** - 详细的安装步骤和环境要求
- **[命令行工具](./cli.md)** - CLI 工具的完整使用说明
- **[编程接口](./api.md)** - Node.js 编程接口文档
- **[TypeScript 类型工具](./typescript.md)** - 类型安全的 API 调用方法
- **[配置参考](./configuration.md)** - 完整的配置选项说明
- **[故障排除](./troubleshooting.md)** - 常见问题和解决方案

### 配置

支持多种配置方式：

```javascript
// apifox.config.js
export default {
  projectId: 'YOUR_PROJECT_ID',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 模块化导出
  modules: [
    {
      name: '用户模块',
      folderId: 'USER_FOLDER_ID',
      outdir: './src/types/user'
    }
  ]
};
```

更多配置选项请查看 [配置参考](./configuration.md)。



### 贡献

我们欢迎所有形式的贡献！如果你有任何想法、建议或发现了 bug，请：

1. 查看 [Issues](https://github.com/shixinde/apifox-swagger/issues) 是否已有相关问题
2. 创建新的 Issue 描述问题或建议
3. 提交 Pull Request

在提交代码前，请确保：
- 代码通过所有测试
- 遵循项目的代码规范
- 添加必要的文档和测试

### 相关项目

- [Vue3 组件库 Element ProMax](https://shixindea.github.io/element-promax-docs/en-US/)
- [Git 提交规范 Guoguo-cz](https://www.npmjs.com/package/@shixinde/guoguo-cz)
- [JavaScript 工具类 Guoguo-utils](https://shixindea.github.io/shixinde-utils/)
- [vuepress 快速模板 Guoguo-vuepress](https://www.npmjs.com/package/@shixinde/vuepress-theme-init)
- [个人笔记 guoguo-notes](https://www.npmjs.com/package/@shixinde/vuepress-theme-init)
- [api 文档生成工具 apifox-swagger](https://www.npmjs.com/package/@shixinde/apifox-swagger)


### 许可证

该项目基于 MIT 许可证开源，详情请参阅 [LICENSE](https://github.com/shixinde/apifox-swagger/blob/main/LICENSE)。

### 作者

袁果锅 (@shixinde)

- GitHub: [@shixinde](https://github.com/shixinde)
- Email: 2914310412@qq.com

---

如果这个项目对你有帮助，请给我们一个 ⭐️！
