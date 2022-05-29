const { readdir, rm, copyFile, mkdir } = require('fs/promises');
const { resolve } = require('path');
const filePath = resolve(__dirname, 'files');
const filePathCopy = resolve(__dirname, 'files-copy');

(async() => {
  try {
    await rm(filePathCopy, { recursive: true, force: true });
    await mkdir(filePathCopy, { recursive: true });

    const files = await readdir(filePath, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        await copyFile(resolve(__dirname, 'files', file.name), resolve(__dirname, 'files-copy', file.name));
      }
    }
    console.log('Copy done!');
  } catch (error) {
    if (error) throw error;
  }
})();
