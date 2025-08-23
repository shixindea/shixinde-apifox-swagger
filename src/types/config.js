"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
exports.getTypesImportPath = getTypesImportPath;
exports.createConfig = createConfig;
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var url_1 = require("url");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
/**
 * 默认配置
 */
var DEFAULT_CONFIG = {
    typesFilePath: '../output/swagger/all.ts'
};
/**
 * 从环境变量读取配置
 */
function getConfigFromEnv() {
    var config = {};
    if (process.env.API_TYPES_FILE_PATH) {
        config.typesFilePath = process.env.API_TYPES_FILE_PATH;
    }
    return config;
}
/**
 * 从配置文件读取配置
 */
function getConfigFromFile(configPath) {
    return __awaiter(this, void 0, void 0, function () {
        var defaultConfigPath, finalConfigPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultConfigPath = path_1.default.join(__dirname, 'apifox-swagger.config.json');
                    finalConfigPath = configPath || defaultConfigPath;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fs_extra_1.default.pathExists(finalConfigPath)];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, fs_extra_1.default.readJson(finalConfigPath)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.warn("\u26A0\uFE0F  \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u5931\u8D25: ".concat(finalConfigPath), error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, {}];
            }
        });
    });
}
/**
 * 获取完整配置
 * 优先级: 环境变量 > 配置文件 > 默认值
 */
function getConfig(configPath) {
    return __awaiter(this, void 0, void 0, function () {
        var envConfig, fileConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    envConfig = getConfigFromEnv();
                    return [4 /*yield*/, getConfigFromFile(configPath)];
                case 1:
                    fileConfig = _a.sent();
                    return [2 /*return*/, __assign(__assign(__assign({}, DEFAULT_CONFIG), fileConfig), envConfig)];
            }
        });
    });
}
/**
 * 获取类型文件的导入路径
 */
function getTypesImportPath(configPath) {
    return __awaiter(this, void 0, void 0, function () {
        var config, typesFilePath, currentDir, relativePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getConfig(configPath)
                    // 计算相对路径
                ];
                case 1:
                    config = _a.sent();
                    typesFilePath = path_1.default.resolve(__dirname, config.typesFilePath);
                    currentDir = __dirname;
                    relativePath = path_1.default.relative(currentDir, typesFilePath.replace('.ts', ''));
                    return [2 /*return*/, relativePath.replace(/\\/g, '/')];
            }
        });
    });
}
/**
 * 创建配置文件
 */
function createConfig(configPath, config) {
    return __awaiter(this, void 0, void 0, function () {
        var defaultConfigPath, finalConfigPath, finalConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    defaultConfigPath = path_1.default.join(__dirname, 'apifox-swagger.config.json');
                    finalConfigPath = configPath || defaultConfigPath;
                    finalConfig = __assign(__assign({}, DEFAULT_CONFIG), config);
                    return [4 /*yield*/, fs_extra_1.default.writeJson(finalConfigPath, finalConfig, { spaces: 2 })];
                case 1:
                    _a.sent();
                    console.log("\u2705 \u914D\u7F6E\u6587\u4EF6\u5DF2\u521B\u5EFA: ".concat(finalConfigPath));
                    return [2 /*return*/];
            }
        });
    });
}
