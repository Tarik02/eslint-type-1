import { globby } from 'globby';
import { readFile, writeFile } from 'node:fs/promises';
import { argv } from 'node:process';

const versionToSet = argv[2];

await Promise.all(
    (
        await globby([
            'packages/*/package.json',
            'package.json'
        ])
    )
        .map(async packagePath => {
            const packageJson = JSON.parse(
                await readFile(packagePath, 'utf-8')
            );

            packageJson.version = versionToSet;

            await writeFile(
                packagePath,
                JSON.stringify(packageJson, undefined, 4)
            );
        })
);
