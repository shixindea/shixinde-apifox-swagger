#!/usr/bin/env node

/**
 * @shixinde/apifox-swagger CLI 入口文件
 * 
 * 这是 npm 包的命令行工具入口，用户安装包后可以直接使用 apifox-swagger 命令
 */

import { program } from 'commander';
import { initCommandApifox } from './index.js';

// 初始化 CLI
program
  .name('apifox-swagger')
  .description('Apifox API 文档导出工具')
  .version('1.0.0');

// 添加 apifox-swagger 命令
initCommandApifox(program);

// 解析命令行参数
program.parse(process.argv);