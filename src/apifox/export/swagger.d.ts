import { type OpenAPI3 } from 'openapi-typescript';
export declare const fetchSwaggerLocal: () => Promise<OpenAPI3 | undefined>;
export declare const fetchSwagger: (projectId: string, folderId?: number) => Promise<OpenAPI3>;
export declare const exportSwagger: ({ projectId, outputDir, folderId, folderName, }: {
    projectId: string;
    outputDir: string;
    folderId?: number;
    folderName?: string;
}) => Promise<OpenAPI3>;
