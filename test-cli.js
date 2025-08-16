#!/usr/bin/env node

import { program } from 'commander';
import invariant from 'tiny-invariant';
import { initCommandApifox } from './src/index.js';

// 初始化 CLI
program.name('test-apifox');

// APIFOX_ACCESS_TOKEN = your_token node test - cli.js apifox - swagger--projectId 2364643 --outdir./ output--token APS - X2Qz1fqd02Thbnfj2z4Vw3nCN9z4VKEP
// 添加 apifox-swagger 命令
initCommandApifox(program);

// 解析命令行参数
program.parse(process.argv);