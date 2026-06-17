function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        return reject(new Error(`Failed to process ${filename}`));
      }
      const result = {
        filename,
        size: Math.floor(Math.random() * 1000) + 100,
        processedAt: new Date().toLocaleTimeString(),
      };
      console.log(`Completed ${filename}`);
      resolve(result);
    }, processingTime);
  });
}

const files = [
  { name: 'document1.pdf', time: 2000 },
  { name: 'image1.jpg', time: 1500 },
  { name: 'data.csv', time: 3000 },
  { name: 'report.docx', time: 1000 }
];

function runAllFiles() {
  const start = Date.now();
  const promises = files.map(f => processFile(f.name, f.time));

  Promise.all(promises)
    .then(results => {
      console.log('All files processed:', results);
      console.log('Total time (ms):', Date.now() - start);
    })
    .catch(err => {
      console.error('Processing failed:', err.message);
      Promise.allSettled(promises).then(settled => {
        console.log('AllSettled results:', settled);
        console.log('Total time (ms):', Date.now() - start);
      });
    });
}

window.runAllFiles = runAllFiles;
runAllFiles();