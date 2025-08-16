import invariant from 'tiny-invariant';

const initCommandApifox = (cli) => {
    cli.command('apifox-swagger')
        .description('Fetch apifox client')
        .option('--projectId <projectId>', 'The project id of the apifox')
        .option('-o, --outdir <outdir>', 'The outdir format of the apifox', {
            default: `./.${cli.name}/apifox`
        }).option('--folderId <folderId>', 'The folder id of the apifox').option('--folderName <folderName>', 'The folder name of the apifox').option('--local', 'Fetch from local Apifox client instead of cloud API').action(async (options) => {
            if (!options.local) {
                invariant(options.projectId, 'projectId is required when not using --local option');
                console.log(`Fetching apifox client https://api.apifox.com/v1/projects/${options.projectId}/export-openapi?locale=zh-CN...`);
            } else {
                console.log('Fetching apifox client from local Apifox application...');
            }
            const { exportSwagger } = await import("../apifox.js");
            await exportSwagger({
                projectId: options.projectId,
                outputDir: options.outdir,
                folderId: options.folderId,
                folderName: options.folderName,
                useLocal: options.local
            });
        });
};

export { initCommandApifox };