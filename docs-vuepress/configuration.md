# 配置参考

@shixinde/apifox-swagger 支持多种配置方式，让你可以灵活地定制导出行为。

## 配置方式

### 1. 环境变量

```bash
# .env 文件
APIFOX_ACCESS_TOKEN=your-access-token
APIFOX_PROJECT_ID=266643
APIFOX_BASE_URL=https://api.apifox.cn
OUTPUT_DIR=./src/types
```

### 2. 配置文件

#### apifox.config.js（推荐）

```javascript
export default {
  // 基本配置
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 导出选项
  useLocal: false,
  folderId: null,
  folderName: null,
  
  // 高级配置
  timeout: 30000,
  retries: 3,
  
  // 多模块配置
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

#### apifox.config.json

```json
{
  "projectId": "266643",
  "outdir": "./src/types",
  "useLocal": false,
  "modules": [
    {
      "name": "用户模块",
      "folderId": "123456",
      "outdir": "./src/types/user"
    }
  ]
}
```

### 3. package.json 配置

```json
{
  "apifox": {
    "projectId": "266643",
    "outdir": "./src/types",
    "modules": [
      {
        "name": "用户模块",
        "folderId": "123456"
      }
    ]
  }
}
```

## 配置选项详解

### 基本选项

#### projectId
- **类型**: `string`
- **必需**: 是（云端模式）
- **描述**: Apifox 项目 ID
- **示例**: `"266643"`

#### token
- **类型**: `string`
- **必需**: 是（云端模式）
- **描述**: Apifox 访问令牌
- **示例**: `"your-access-token"`
- **注意**: 可以通过环境变量 `APIFOX_ACCESS_TOKEN` 设置

#### outdir
- **类型**: `string`
- **默认值**: `"./apifox"`
- **描述**: 输出目录路径
- **示例**: `"./src/types"`

### 导出选项

#### useLocal
- **类型**: `boolean`
- **默认值**: `false`
- **描述**: 是否从本地 Apifox 客户端导出
- **示例**: `true`

#### folderId
- **类型**: `string | null`
- **默认值**: `null`
- **描述**: 指定要导出的文件夹 ID
- **示例**: `"123456"`

#### folderName
- **类型**: `string | null`
- **默认值**: `null`
- **描述**: 指定要导出的文件夹名称
- **示例**: `"用户模块"`

### 网络选项

#### baseUrl
- **类型**: `string`
- **默认值**: `"https://api.apifox.cn"`
- **描述**: Apifox API 基础 URL
- **示例**: `"https://api.apifox.cn"`

#### timeout
- **类型**: `number`
- **默认值**: `30000`
- **描述**: 请求超时时间（毫秒）
- **示例**: `60000`

#### retries
- **类型**: `number`
- **默认值**: `3`
- **描述**: 失败重试次数
- **示例**: `5`

### 输出选项

#### filename
- **类型**: `string`
- **默认值**: `"all"`
- **描述**: 输出文件名（不包含扩展名）
- **示例**: `"api"`

#### format
- **类型**: `"json" | "typescript" | "both"`
- **默认值**: `"both"`
- **描述**: 输出格式
- **示例**: `"typescript"`

### 多模块配置

#### modules
- **类型**: `ModuleConfig[]`
- **默认值**: `[]`
- **描述**: 多模块配置数组

```typescript
interface ModuleConfig {
  name: string;           // 模块名称
  folderId?: string;      // 文件夹 ID
  folderName?: string;    // 文件夹名称
  outdir?: string;        // 输出目录（可选，默认使用主配置）
  filename?: string;      // 文件名（可选，默认使用模块名）
}
```

## 配置示例

### 1. 简单项目配置

```javascript
// apifox.config.js
export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/api/types'
};
```

### 2. 多模块项目配置

```javascript
// apifox.config.js
export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  modules: [
    {
      name: '用户模块',
      folderId: '123456',
      outdir: './src/types/user',
      filename: 'user-api'
    },
    {
      name: '订单模块',
      folderId: '123457',
      outdir: './src/types/order',
      filename: 'order-api'
    },
    {
      name: '产品模块',
      folderId: '123458',
      outdir: './src/types/product',
      filename: 'product-api'
    },
    {
      name: '支付模块',
      folderName: '支付相关接口', // 也可以使用文件夹名称
      outdir: './src/types/payment'
    }
  ]
};
```

### 3. 开发环境配置

```javascript
// apifox.config.dev.js
export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 开发环境特定配置
  timeout: 60000,
  retries: 1,
  
  // 只导出特定模块进行快速开发
  modules: [
    {
      name: '用户模块',
      folderId: '123456'
    }
  ]
};
```

### 4. 生产环境配置

```javascript
// apifox.config.prod.js
export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './dist/types',
  
  // 生产环境配置
  timeout: 30000,
  retries: 5,
  
  // 导出所有模块
  modules: [
    { name: '用户模块', folderId: '123456' },
    { name: '订单模块', folderId: '123457' },
    { name: '产品模块', folderId: '123458' },
    { name: '支付模块', folderId: '123459' },
    { name: '通知模块', folderId: '123460' }
  ]
};
```

### 5. 本地开发配置

```javascript
// apifox.config.local.js
export default {
  useLocal: true,
  outdir: './src/types/local',
  
  // 本地模式不需要 projectId 和 token
  timeout: 10000,
  retries: 1
};
```

## 配置文件优先级

配置文件的加载优先级（从高到低）：

1. 命令行参数
2. `apifox.config.js`
3. `apifox.config.json`
4. `package.json` 中的 `apifox` 字段
5. 环境变量
6. 默认值

## 环境变量参考

| 环境变量 | 对应配置 | 描述 |
|----------|----------|------|
| `APIFOX_ACCESS_TOKEN` | `token` | 访问令牌 |
| `APIFOX_PROJECT_ID` | `projectId` | 项目 ID |
| `APIFOX_BASE_URL` | `baseUrl` | API 基础 URL |
| `OUTPUT_DIR` | `outdir` | 输出目录 |
| `USE_LOCAL` | `useLocal` | 是否使用本地模式 |
| `TIMEOUT` | `timeout` | 请求超时时间 |
| `RETRIES` | `retries` | 重试次数 |

## 动态配置

### 1. 基于环境的配置

```javascript
// apifox.config.js
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: isDev ? './src/types' : './dist/types',
  
  // 开发环境只导出核心模块
  modules: isDev ? [
    { name: '用户模块', folderId: '123456' }
  ] : [
    { name: '用户模块', folderId: '123456' },
    { name: '订单模块', folderId: '123457' },
    { name: '产品模块', folderId: '123458' }
  ],
  
  timeout: isDev ? 10000 : 30000,
  retries: isDev ? 1 : 3
};
```

### 2. 基于分支的配置

```javascript
// apifox.config.js
import { execSync } from 'child_process';

const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();

const branchConfigs = {
  'main': {
    projectId: '266643', // 生产项目
    modules: [
      { name: '用户模块', folderId: '123456' },
      { name: '订单模块', folderId: '123457' }
    ]
  },
  'develop': {
    projectId: '2364644', // 开发项目
    modules: [
      { name: '用户模块', folderId: '123460' }
    ]
  },
  'feature/*': {
    projectId: '2364645', // 功能分支项目
    modules: [
      { name: '新功能模块', folderId: '123470' }
    ]
  }
};

function getBranchConfig() {
  if (branchConfigs[currentBranch]) {
    return branchConfigs[currentBranch];
  }
  
  // 检查通配符匹配
  for (const [pattern, config] of Object.entries(branchConfigs)) {
    if (pattern.includes('*') && currentBranch.startsWith(pattern.replace('*', ''))) {
      return config;
    }
  }
  
  // 默认配置
  return branchConfigs['develop'];
}

export default {
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  ...getBranchConfig()
};
```

### 3. 基于用户的配置

```javascript
// apifox.config.js
import os from 'os';

const username = os.userInfo().username;

const userConfigs = {
  'developer1': {
    modules: [
      { name: '用户模块', folderId: '123456' },
      { name: '订单模块', folderId: '123457' }
    ]
  },
  'developer2': {
    modules: [
      { name: '产品模块', folderId: '123458' },
      { name: '支付模块', folderId: '123459' }
    ]
  }
};

export default {
  projectId: '266643',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 根据用户加载不同的模块
  modules: userConfigs[username] || [
    { name: '用户模块', folderId: '123456' }
  ]
};
```

## 配置验证

### 1. 基本验证

```javascript
// scripts/validate-config.js
import config from '../apifox.config.js';

function validateConfig(config) {
  const errors = [];
  
  // 检查必需字段
  if (!config.projectId && !config.useLocal) {
    errors.push('projectId 是必需的（除非使用本地模式）');
  }
  
  if (!config.token && !config.useLocal && !process.env.APIFOX_ACCESS_TOKEN) {
    errors.push('token 是必需的（除非使用本地模式）');
  }
  
  if (!config.outdir) {
    errors.push('outdir 是必需的');
  }
  
  // 检查模块配置
  if (config.modules) {
    config.modules.forEach((module, index) => {
      if (!module.name) {
        errors.push(`模块 ${index} 缺少 name 字段`);
      }
      
      if (!module.folderId && !module.folderName) {
        errors.push(`模块 ${module.name} 需要 folderId 或 folderName`);
      }
    });
  }
  
  return errors;
}

const errors = validateConfig(config);
if (errors.length > 0) {
  console.error('配置验证失败:');
  errors.forEach(error => console.error(`  - ${error}`));
  process.exit(1);
} else {
  console.log('配置验证通过');
}
```

### 2. 运行时验证

```javascript
// src/utils/config-validator.js
export function validateRuntimeConfig(config) {
  const warnings = [];
  
  // 检查输出目录是否存在
  if (!fs.existsSync(config.outdir)) {
    warnings.push(`输出目录 ${config.outdir} 不存在，将自动创建`);
  }
  
  // 检查超时时间
  if (config.timeout < 5000) {
    warnings.push('超时时间过短，可能导致请求失败');
  }
  
  // 检查重试次数
  if (config.retries > 10) {
    warnings.push('重试次数过多，可能导致长时间等待');
  }
  
  return warnings;
}
```

## 配置模板

### 1. 小型项目模板

```javascript
// apifox.config.js
export default {
  projectId: 'YOUR_PROJECT_ID',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types'
};
```

### 2. 中型项目模板

```javascript
// apifox.config.js
export default {
  projectId: 'YOUR_PROJECT_ID',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  modules: [
    {
      name: '用户模块',
      folderId: 'USER_FOLDER_ID',
      outdir: './src/types/user'
    },
    {
      name: '业务模块',
      folderId: 'BUSINESS_FOLDER_ID',
      outdir: './src/types/business'
    }
  ]
};
```

### 3. 大型项目模板

```javascript
// apifox.config.js
const isDev = process.env.NODE_ENV === 'development';

export default {
  projectId: 'YOUR_PROJECT_ID',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  timeout: 30000,
  retries: 3,
  
  modules: [
    {
      name: '用户管理',
      folderId: 'USER_FOLDER_ID',
      outdir: './src/types/user'
    },
    {
      name: '订单管理',
      folderId: 'ORDER_FOLDER_ID',
      outdir: './src/types/order'
    },
    {
      name: '产品管理',
      folderId: 'PRODUCT_FOLDER_ID',
      outdir: './src/types/product'
    },
    {
      name: '支付系统',
      folderId: 'PAYMENT_FOLDER_ID',
      outdir: './src/types/payment'
    },
    {
      name: '通知系统',
      folderId: 'NOTIFICATION_FOLDER_ID',
      outdir: './src/types/notification'
    }
  ].filter(module => {
    // 开发环境只导出核心模块
    if (isDev) {
      return ['用户管理', '订单管理'].includes(module.name);
    }
    return true;
  })
};
```

## 下一步

- [故障排除指南](./troubleshooting.md)
- [TypeScript 类型工具](./typescript.md)
- [编程接口使用](./api.md)
- [命令行工具使用](./cli.md)