/**
 * Apifox API 文档导出工具
 * 用于从 Apifox 项目导出 Swagger/OpenAPI 文档并生成 TypeScript 类型定义
 * 
 * 主要功能：
 * 1. 从本地 Apifox 客户端获取 Swagger 文档
 * 2. 从 Apifox 云端 API 获取 Swagger 文档
 * 3. 将 Swagger 文档转换为 TypeScript 类型定义
 * 4. 保存 JSON 和 TypeScript 文件到指定目录
 */

import * as __WEBPACK_EXTERNAL_MODULE_fs_extra__ from "fs-extra";
import * as __WEBPACK_EXTERNAL_MODULE_openapi_typescript__ from "openapi-typescript";
import * as __WEBPACK_EXTERNAL_MODULE_tiny_invariant__ from "tiny-invariant";
import * as __WEBPACK_EXTERNAL_MODULE_undici__ from "undici";

// 可能的端口 - Apifox 本地客户端默认端口
const probablePorts = [
    4523
];

// 可能的主机 - 本地主机地址
const probableHosts = [
    '127.0.0.1'
];
/**
 * 从本地 Apifox 客户端获取 Swagger 文档
 * 
 * 该函数会尝试连接本地运行的 Apifox 客户端，通过其提供的 HTTP API 获取 OpenAPI 文档。
 * 它会遍历可能的主机和端口组合，并尝试不同的项目 ID（从 9999 开始递减）。
 * 
 * @returns {Promise<Object|undefined>} 返回 Swagger 文档对象，如果获取失败则返回 undefined
 */
const fetchSwaggerLocal = async ()=>{
    let swagger;
    // 遍历所有可能的主机
    for (const host of probableHosts)
        // 遍历所有可能的端口
        for (const port of probablePorts)
            // 尝试不同的项目 ID，从 9999 开始递减
            for(let index = 9999; index > 0; index--)
                try {
                    // 构建 Apifox 本地 API 的 URL
                    const url = `http://${host}:${port}/export/openapi/${index}?version=3.0`;
                    const response = await (0, __WEBPACK_EXTERNAL_MODULE_undici__.fetch)(url);
                    
                    // 如果请求成功，获取 Swagger 文档
                    if (200 === response.status) {
                        console.log(`Fetched swagger from ${url}`);
                        swagger = await response.json();
                    }
                    break;
                } catch (error) {
                    console.error(error);
                }
    return swagger;
};
/**
 * 从 Apifox 云端 API 获取 Swagger 文档
 * 
 * 通过 Apifox 官方 API 获取指定项目的 OpenAPI 文档。支持获取整个项目或指定文件夹的 API 文档。
 * 
 * @param {string} projectId - Apifox 项目 ID
 * @param {string} [folderId] - 可选的文件夹 ID，如果提供则只导出该文件夹下的 API
 * @returns {Promise<Object>} 返回 Swagger 文档对象
 * @throws {Error} 如果 APIFOX_ACCESS_TOKEN 环境变量未设置则抛出错误
 */
const fetchSwagger = async (projectId, folderId)=>{
    // 验证必需的环境变量
    (0, __WEBPACK_EXTERNAL_MODULE_tiny_invariant__["default"])(process.env.APIFOX_ACCESS_TOKEN, 'APIFOX_ACCESS_TOKEN is required');
    
    // 根据是否提供文件夹 ID 来设置导出范围
    const scope = folderId ? {
        type: 'SELECTED_FOLDERS',  // 导出指定文件夹
        selectedFolderIds: [
            folderId
        ]
    } : {
        type: 'ALL'  // 导出整个项目
    };
    
    // 调用 Apifox API 导出 OpenAPI 文档
    const response = await (0, __WEBPACK_EXTERNAL_MODULE_undici__.fetch)(`https://api.apifox.com/v1/projects/${projectId}/export-openapi?locale=zh-CN`, {
        method: 'POST',
        headers: {
            'X-Apifox-Api-Version': '2024-03-28',  // API 版本
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.APIFOX_ACCESS_TOKEN}`  // 访问令牌
        },
        redirect: 'follow',
        body: JSON.stringify({
            scope,  // 导出范围
            options: {
                includeApifoxExtensionProperties: false,  // 不包含 Apifox 扩展属性
                addFoldersToTags: false  // 不将文件夹添加为标签
            },
            oasVersion: '3.1',  // OpenAPI 规范版本
            exportFormat: 'JSON'  // 导出格式
        })
    });
    return await response.json();
};
/**
 * 导出 Swagger 文档并生成 TypeScript 类型定义
 * 
 * 这是主要的导出函数，它会：
 * 1. 从 Apifox 获取 Swagger 文档
 * 2. 将文档保存为 JSON 文件
 * 3. 生成对应的 TypeScript 类型定义文件
 * 
 * @param {Object} options - 导出选项
 * @param {string} options.projectId - Apifox 项目 ID
 * @param {string} options.outputDir - 输出目录路径
 * @param {string} [options.folderId] - 可选的文件夹 ID
 * @param {string} [options.folderName] - 可选的文件夹名称，用于文件命名
 * @returns {Promise<Object>} 返回获取到的 Swagger 文档对象
 */
const exportSwagger = async ({ projectId, outputDir, folderId, folderName })=>{
    // 注释：也可以从本地获取 Swagger 文档
    // const swagger = await fetchSwaggerLocal()
    
    // 构建日志信息，显示导出的范围
    const folder = folderId ? `folder [${folderId}] to <${folderName}>` : 'to <all>';
    console.log(`Fetching swagger from apifox project [${projectId}] ${folder}...`);
    
    // 从 Apifox 获取 Swagger 文档
    const swagger = await fetchSwagger(projectId, folderId);
    
    // 构建输出文件路径
    const swaggerPath = `${outputDir}/swagger/${folderName ?? 'all'}.json`;
    const swaggerTSPath = `${outputDir}/swagger/${folderName ?? 'all'}.ts`;
    
    // 将 Swagger 文档转换为 TypeScript AST
    const ast = await (0, __WEBPACK_EXTERNAL_MODULE_openapi_typescript__["default"])(swagger, {});
    
    // 确保输出目录存在
    __WEBPACK_EXTERNAL_MODULE_fs_extra__["default"].ensureDirSync(`${outputDir}/swagger`);
    
    // 保存 JSON 格式的 Swagger 文档
    __WEBPACK_EXTERNAL_MODULE_fs_extra__["default"].writeJsonSync(swaggerPath, swagger, {
        spaces: 2  // 格式化 JSON，使用 2 个空格缩进
    });
    
    // 保存 TypeScript 类型定义文件
    __WEBPACK_EXTERNAL_MODULE_fs_extra__["default"].writeFileSync(swaggerTSPath, (0, __WEBPACK_EXTERNAL_MODULE_openapi_typescript__.astToString)(ast));
    
    // 输出成功信息
    console.log(`Exported swagger [json] to ${swaggerPath}`);
    console.log(`Exported swagger [type] to ${swaggerTSPath}`);
    
    return swagger;
};
export { exportSwagger, fetchSwagger, fetchSwaggerLocal };
