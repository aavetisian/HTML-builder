const fs = require('fs');
const fsPromises = fs.promises;
const copyFile = fsPromises.copyFile;
const path = require('path');

async function copyDir() {
    try {
        await fsPromises.rm(
            path.join(__dirname, 'files-copy'),
            { recursive: true, force: true }
        );

        await fsPromises.mkdir(
            path.join(__dirname, 'files-copy'),
            { recursive: true }
        );

        console.log('Folder successfully created.');

        const files = await fsPromises.readdir(path.join(__dirname, 'files'));
        for (const file of files) {
            const filePath = path.join(__dirname, 'files', file);
            await copyFile(filePath, path.join(__dirname, 'files-copy', file));
        }
    } catch (err) {
        console.error(err);
    }
}

copyDir();

