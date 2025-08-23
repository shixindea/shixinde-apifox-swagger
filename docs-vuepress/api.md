# 编程接口

除了命令行工具，@shixinde/apifox-swagger 还提供了强大的编程接口，让你可以在 Node.js 应用中集成 API 文档导出功能。

## 基本用法

### 导入模块

```javascript
// ES6 模块
import { exportSwagger } from '@shixinde/apifox-swagger';

// CommonJS
const { exportSwagger } = require('@shixinde/apifox-swagger');
```

### 简单导出

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';

async function exportAPI() {
  try {
    const result = await exportSwagger({
      projectId: '2364643',
      token: 'your-access-token',
      outdir: './output'
    });
    
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

exportAPI();
```

## API 参考

### exportSwagger(options)

导出 Swagger 文档的主要函数。

#### 参数

```typescript
interface ExportOptions {
  // 必需参数
  projectId: string;          // Apifox 项目 ID
  outdir: string;             // 输出目录路径
  
  // 可选参数
  token?: string;             // 访问令牌（优先级高于环境变量）
  useLocal?: boolean;         // 是否使用本地客户端（默认：false）
  folderId?: string;          // 文件夹 ID
  folderName?: string;        // 文件夹名称
}
```

#### 返回值

```typescript
interface ExportResult {
  success: boolean;           // 是否成功
  message: string;            // 结果消息
  files: string[];            // 生成的文件列表
  outputDir: string;          // 输出目录
}
```

## 使用示例

### 1. 基本导出

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';

async function basicExport() {
  const result = await exportSwagger({
    projectId: '2364643',
    token: process.env.APIFOX_ACCESS_TOKEN,
    outdir: './src/types'
  });
  
  console.log(`导出完成，生成文件: ${result.files.join(', ')}`);
}
```

### 2. 导出指定文件夹

```javascript
async function exportFolder() {
  const result = await exportSwagger({
    projectId: '2364643',
    token: process.env.APIFOX_ACCESS_TOKEN,
    outdir: './src/types/user',
    folderId: '123456',
    folderName: '用户模块'
  });
  
  return result;
}
```

### 3. 批量导出多个模块

```javascript
async function exportMultipleModules() {
  const modules = [
    { name: '用户模块', folderId: '123456', outdir: './src/types/user' },
    { name: '订单模块', folderId: '123457', outdir: './src/types/order' },
    { name: '产品模块', folderId: '123458', outdir: './src/types/product' }
  ];
  
  const results = [];
  
  for (const module of modules) {
    try {
      console.log(`正在导出 ${module.name}...`);
      
      const result = await exportSwagger({
        projectId: '2364643',
        token: process.env.APIFOX_ACCESS_TOKEN,
        outdir: module.outdir,
        folderId: module.folderId,
        folderName: module.name
      });
      
      results.push({ module: module.name, success: true, result });
      console.log(`${module.name} 导出成功`);
    } catch (error) {
      results.push({ module: module.name, success: false, error: error.message });
      console.error(`${module.name} 导出失败:`, error.message);
    }
  }
  
  return results;
}
```

### 4. 并行导出

```javascript
async function parallelExport() {
  const modules = [
    { name: '用户模块', folderId: '123456', outdir: './src/types/user' },
    { name: '订单模块', folderId: '123457', outdir: './src/types/order' },
    { name: '产品模块', folderId: '123458', outdir: './src/types/product' }
  ];
  
  const promises = modules.map(module => 
    exportSwagger({
      projectId: '2364643',
      token: process.env.APIFOX_ACCESS_TOKEN,
      outdir: module.outdir,
      folderId: module.folderId,
      folderName: module.name
    }).then(result => ({ module: module.name, success: true, result }))
     .catch(error => ({ module: module.name, success: false, error: error.message }))
  );
  
  const results = await Promise.all(promises);
  
  results.forEach(result => {
    if (result.success) {
      console.log(`${result.module} 导出成功`);
    } else {
      console.error(`${result.module} 导出失败:`, result.error);
    }
  });
  
  return results;
}
```

## 配置文件集成

### 1. 使用配置文件

创建 `apifox.config.js`：

```javascript
export default {
  projectId: '2364643',
  outdir: './src/types',
  token: process.env.APIFOX_ACCESS_TOKEN,
  
  // 模块配置
  modules: [
    {
      name: '用户模块',
      folderId: '123456',
      outdir: './src/types/user'
    },
    {
      name: '订单模块', 
      folderId: '123457',
      outdir: './src/types/order'
    }
  ]
};
```

使用配置文件：

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';
import config from './apifox.config.js';

async function exportWithConfig() {
  // 导出主项目
  await exportSwagger(config);
  
  // 导出各个模块
  if (config.modules) {
    for (const module of config.modules) {
      await exportSwagger({
        ...config,
        ...module
      });
    }
  }
}
```

### 2. 动态配置

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';

class APIExporter {
  constructor(baseConfig) {
    this.baseConfig = baseConfig;
  }
  
  async exportProject(options = {}) {
    return await exportSwagger({
      ...this.baseConfig,
      ...options
    });
  }
  
  async exportModule(moduleName, moduleConfig) {
    return await exportSwagger({
      ...this.baseConfig,
      ...moduleConfig,
      folderName: moduleName
    });
  }
  
  async exportAll(modules) {
    const results = [];
    
    // 导出主项目
    try {
      const mainResult = await this.exportProject();
      results.push({ type: 'main', success: true, result: mainResult });
    } catch (error) {
      results.push({ type: 'main', success: false, error: error.message });
    }
    
    // 导出各个模块
    for (const [name, config] of Object.entries(modules)) {
      try {
        const result = await this.exportModule(name, config);
        results.push({ type: 'module', name, success: true, result });
      } catch (error) {
        results.push({ type: 'module', name, success: false, error: error.message });
      }
    }
    
    return results;
  }
}

// 使用示例
const exporter = new APIExporter({
  projectId: '2364643',
  token: process.env.APIFOX_ACCESS_TOKEN
});

const modules = {
  '用户模块': {
    folderId: '123456',
    outdir: './src/types/user'
  },
  '订单模块': {
    folderId: '123457', 
    outdir: './src/types/order'
  }
};

const results = await exporter.exportAll(modules);
```

## 错误处理

### 1. 基本错误处理

```javascript
async function exportWithErrorHandling() {
  try {
    const result = await exportSwagger({
      projectId: '2364643',
      token: process.env.APIFOX_ACCESS_TOKEN,
      outdir: './output'
    });
    
    return result;
  } catch (error) {
    // 根据错误类型进行不同处理
    if (error.message.includes('401')) {
      console.error('认证失败，请检查访问令牌');
    } else if (error.message.includes('403')) {
      console.error('权限不足，请检查项目访问权限');
    } else if (error.message.includes('404')) {
      console.error('项目或文件夹不存在');
    } else {
      console.error('导出失败:', error.message);
    }
    
    throw error;
  }
}
```

### 2. 重试机制

```javascript
async function exportWithRetry(options, maxRetries = 3) {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await exportSwagger(options);
      return result;
    } catch (error) {
      lastError = error;
      
      if (i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000; // 指数退避
        console.log(`导出失败，${delay}ms 后重试...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}
```

## 集成示例

### 1. Express.js 集成

```javascript
import express from 'express';
import { exportSwagger } from '@shixinde/apifox-swagger';

const app = express();

app.post('/api/export-swagger', async (req, res) => {
  try {
    const { projectId, folderId, folderName } = req.body;
    
    const result = await exportSwagger({
      projectId,
      folderId,
      folderName,
      token: process.env.APIFOX_ACCESS_TOKEN,
      outdir: './temp/exports'
    });
    
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000);
```

### 2. 定时任务集成

```javascript
import cron from 'node-cron';
import { exportSwagger } from '@shixinde/apifox-swagger';

// 每天凌晨 2 点自动导出
cron.schedule('0 2 * * *', async () => {
  console.log('开始定时导出 API 文档...');
  
  try {
    const result = await exportSwagger({
      projectId: '2364643',
      token: process.env.APIFOX_ACCESS_TOKEN,
      outdir: './src/types'
    });
    
    console.log('定时导出完成:', result);
  } catch (error) {
    console.error('定时导出失败:', error.message);
  }
});
```

### 3. Webpack 插件集成

```javascript
// webpack-apifox-plugin.js
import { exportSwagger } from '@shixinde/apifox-swagger';

class ApifoxWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync('ApifoxWebpackPlugin', async (params, callback) => {
      try {
        console.log('正在导出 API 文档...');
        await exportSwagger(this.options);
        console.log('API 文档导出完成');
        callback();
      } catch (error) {
        console.error('API 文档导出失败:', error.message);
        callback(error);
      }
    });
  }
}

export default ApifoxWebpackPlugin;
```

在 `webpack.config.js` 中使用：

```javascript
import ApifoxWebpackPlugin from './webpack-apifox-plugin.js';

export default {
  // ... 其他配置
  plugins: [
    new ApifoxWebpackPlugin({
      projectId: '2364643',
      token: process.env.APIFOX_ACCESS_TOKEN,
      outdir: './src/types'
    })
  ]
};
```

## 最佳实践

### 1. 环境变量管理

```javascript
// config/env.js
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apifox: {
    token: process.env.APIFOX_ACCESS_TOKEN,
    projectId: process.env.APIFOX_PROJECT_ID,
    baseUrl: process.env.APIFOX_BASE_URL || 'https://api.apifox.cn'
  },
  output: {
    baseDir: process.env.OUTPUT_DIR || './src/types'
  }
};
```

### 2. 日志记录

```javascript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'export.log' }),
    new winston.transports.Console()
  ]
});

async function exportWithLogging(options) {
  logger.info('开始导出 API 文档', { options });
  
  try {
    const result = await exportSwagger(options);
    logger.info('API 文档导出成功', { result });
    return result;
  } catch (error) {
    logger.error('API 文档导出失败', { error: error.message, options });
    throw error;
  }
}
```

### 3. 缓存机制

```javascript
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

class CachedExporter {
  constructor(cacheDir = './.cache') {
    this.cacheDir = cacheDir;
  }
  
  getCacheKey(options) {
    const key = JSON.stringify(options);
    return crypto.createHash('md5').update(key).digest('hex');
  }
  
  async getCachedResult(options, maxAge = 3600000) { // 1小时
    const cacheKey = this.getCacheKey(options);
    const cachePath = path.join(this.cacheDir, `${cacheKey}.json`);
    
    try {
      const stats = await fs.stat(cachePath);
      const age = Date.now() - stats.mtime.getTime();
      
      if (age < maxAge) {
        const cached = await fs.readFile(cachePath, 'utf8');
        return JSON.parse(cached);
      }
    } catch (error) {
      // 缓存不存在或读取失败
    }
    
    return null;
  }
  
  async setCachedResult(options, result) {
    const cacheKey = this.getCacheKey(options);
    const cachePath = path.join(this.cacheDir, `${cacheKey}.json`);
    
    await fs.mkdir(this.cacheDir, { recursive: true });
    await fs.writeFile(cachePath, JSON.stringify(result, null, 2));
  }
  
  async export(options) {
    // 尝试从缓存获取
    const cached = await this.getCachedResult(options);
    if (cached) {
      console.log('使用缓存的结果');
      return cached;
    }
    
    // 执行导出
    const result = await exportSwagger(options);
    
    // 缓存结果
    await this.setCachedResult(options, result);
    
    return result;
  }
}
```

## 下一步

- [TypeScript 类型安全工具](./typescript.md)
- [配置文件详解](./configuration.md)
- [故障排除指南](./troubleshooting.md)
- [命令行工具使用](./cli.md)