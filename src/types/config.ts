import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * API Types 配置接口
 */
export interface ApiTypesConfig {
  /** 类型文件路径 */
  typesFilePath: string
}

/**
 * 默认配置
 */
const DEFAULT_CONFIG: ApiTypesConfig = {
  typesFilePath: '../output/swagger/all.ts'
}

/**
 * 从环境变量读取配置
 */
function getConfigFromEnv(): Partial<ApiTypesConfig> {
  const config: Partial<ApiTypesConfig> = {}
  
  if (process.env.API_TYPES_FILE_PATH) {
    config.typesFilePath = process.env.API_TYPES_FILE_PATH
  }
  
  return config
}

/**
 * 从配置文件读取配置
 */
async function getConfigFromFile(configPath?: string): Promise<Partial<ApiTypesConfig>> {
  const defaultConfigPath = path.join(__dirname, 'apifox-swagger.config.json')
  const finalConfigPath = configPath || defaultConfigPath
  
  try {
    if (await fs.pathExists(finalConfigPath)) {
      return await fs.readJson(finalConfigPath)
    }
  } catch (error) {
    console.warn(`⚠️  读取配置文件失败: ${finalConfigPath}`, error)
  }
  
  return {}
}

/**
 * 获取完整配置
 * 优先级: 环境变量 > 配置文件 > 默认值
 */
export async function getConfig(configPath?: string): Promise<ApiTypesConfig> {
  const envConfig = getConfigFromEnv()
  const fileConfig = await getConfigFromFile(configPath)
  
  return {
    ...DEFAULT_CONFIG,
    ...fileConfig,
    ...envConfig
  }
}

/**
 * 获取类型文件的导入路径
 */
export async function getTypesImportPath(configPath?: string): Promise<string> {
  const config = await getConfig(configPath)
  
  // 计算相对路径
  const typesFilePath = path.resolve(__dirname, config.typesFilePath)
  const currentDir = __dirname
  const relativePath = path.relative(currentDir, typesFilePath.replace('.ts', ''))
  
  return relativePath.replace(/\\/g, '/')
}

/**
 * 创建配置文件
 */
export async function createConfig(configPath?: string, config?: Partial<ApiTypesConfig>): Promise<void> {
  const defaultConfigPath = path.join(__dirname, 'apifox-swagger.config.json')
  const finalConfigPath = configPath || defaultConfigPath
  
  const finalConfig = {
    ...DEFAULT_CONFIG,
    ...config
  }
  
  await fs.writeJson(finalConfigPath, finalConfig, { spaces: 2 })
  console.log(`✅ 配置文件已创建: ${finalConfigPath}`)
}