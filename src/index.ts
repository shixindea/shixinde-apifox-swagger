/**
 * @shixinde/apifox-swagger
 * 
 * Apifox API 文档导出工具
 * 用于从 Apifox 项目导出 Swagger/OpenAPI 文档并生成 TypeScript 类型定义
 * 
 * @author 袁果锅
 * @version 1.0.0
 */

// 导出所有 Apifox 相关功能
// @ts-ignore
export { exportSwagger, fetchSwagger, fetchSwaggerLocal } from './apifox.js';

// 导出 CLI 相关功能
// @ts-ignore
export { initCommandApifox } from './index.js';

// 类型定义
export interface ExportSwaggerOptions {
  /** Apifox 项目 ID（云端模式必需） */
  projectId?: string;
  /** 输出目录路径 */
  outdir: string;
  /** 可选的文件夹 ID（仅云端模式） */
  folderId?: string;
  /** 可选的文件夹名称，用于文件命名 */
  folderName?: string;
  /** 是否从本地 Apifox 客户端获取 */
  useLocal?: boolean;
  /** Apifox 访问令牌（云端模式必需） */
  token?: string;
}

export interface ApifoxCliOptions {
  /** Apifox 项目 ID（云端模式必需） */
  projectId?: string;
  /** 输出目录路径 */
  outdir: string;
  /** 可选的文件夹 ID（仅云端模式） */
  folderId?: string;
  /** 可选的文件夹名称，用于文件命名 */
  folderName?: string;
  /** 是否从本地 Apifox 客户端获取 */
  local?: boolean;
}