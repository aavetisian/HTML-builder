const fs = require("fs");
const path = require("path");
const promises = fs.promises;

(async () => {
    try {
        const folderPath = path.join(__dirname, 'secret-folder');
        const files = await promises.readdir(folderPath, { withFileTypes: true });

        for (const file of files) {
            if (!file.isDirectory()) {
                const filePath = path.join(folderPath, file.name);
                const fileName = path.basename(filePath);
                const ext = path.extname(filePath);
                const stats = await promises.stat(filePath);
                console.log(`${fileName.replace(ext, '')} - ${ext.replace('.', '')} - ${stats.size}b`);
            }
        }
    } catch (err) {
        console.error(err);
    }
})();