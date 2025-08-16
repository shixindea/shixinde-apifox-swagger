#!/usr/bin/env node

import { program } from 'commander';
import invariant from 'tiny-invariant';
import { initCommandApifox } from './src/cli/index.js';

// 初始化 CLI
program.name('test-apifox');

// 添加 apifox-swagger 命令
initCommandApifox(program);

// 解析命令行参数
program.parse(process.argv);