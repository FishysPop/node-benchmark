const os = require('os');
const benchmark = require('benchmark');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); 
const { exec } = require('child_process');
const FastSpeedtest = require('fast-speedtest-api');

// Get CPU information
const numCPUs = os.cpus().length;
const cpuModel = os.cpus()[0].model;
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log('\nSystem Information:');
console.log(`CPU Model: ${cpuModel}`);
console.log(`Number of CPUs: ${numCPUs}`);

const totalMemoryGB = (totalMemory / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Total Memory: ${totalMemoryGB} GB`);

const freeMemoryGB = (freeMemory / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Free Memory: ${freeMemoryGB} GB`);

// Benchmark suite for CPU and storage tests
const suite = new benchmark.Suite();
const testFileSizeInBytes = 1024 * 1024 * 10; // 10MB file size
const testFilePath = path.join(os.tmpdir(), uuidv4() + '.dat');  // Unique filename in temp dir

// Storage write test
suite.add('Storage Write Test', {
  defer: true,
  fn: (deferred) => {
    fs.writeFile(testFilePath, Buffer.alloc(testFileSizeInBytes), (err) => {
      if (err) {
        console.error('Error in write test:', err);
        deferred.resolve(); // Resolve even on error to continue the suite
      } else {
        deferred.resolve();
      }
    });
  }
});

// Storage read test
suite.add('Storage Read Test', {
  defer: true,
  fn: (deferred) => {
    fs.readFile(testFilePath, (err, data) => {
      if (err) {
        console.error('Error in read test:', err);
        deferred.resolve(); // Resolve even on error to continue the suite
      } else {
        deferred.resolve();
      }
    });
  }
});

// Single-core test
suite.add('Single Core Test', () => {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
});

// Multi-core test
suite.add('Multi Core Test', {
  defer: true,
  fn: (deferred) => {
    const tasks = [];
    for (let i = 0; i < numCPUs; i++) {
      tasks.push(new Promise((resolve) => {
        let sum = 0;
        for (let j = 0; j < 100000000 / numCPUs; j++) { // Divide work across cores
          sum += j;
        }
        resolve(sum);
      }));
    }
    Promise.all(tasks).then(() => deferred.resolve());
  }
});

// Cleanup
suite.on('complete', () => {
  fs.unlink(testFilePath, (err) => {
    if (err) {
      console.error('Cleanup error:', err);
    } else {
      console.log('Temporary file deleted successfully');
    }
  });

  // Run network tests once
  runNetworkTests();
});

suite
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true }); 

// Function to run network tests once
function runNetworkTests() {
  // Speed test
  const speedtest = new FastSpeedtest({
    token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm',
    verbose: false,
    urlCount: 5, 
    bufferSize: 8, 
    unit: FastSpeedtest.UNITS.Mbps, 
  });

  speedtest.getSpeed().then(speed => {
    console.log(`Download speed: ${speed.toFixed(2)} Mbps`);
  }).catch(err => {
    console.error('Speed test error:', err);
  });

  // Ping test
  const gateway = '8.8.8.8'; 
  const platform = os.platform();
  const countOption = (platform === 'win32') ? '-n' : '-c';  // Windows: -n, Linux/macOS: -c
  const pingCommand = `ping ${countOption} 3 ${gateway}`; // Consistent command structure

  exec(pingCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ping error: ${error}`);
    } else {
      console.log(`Ping output:\n${stdout}`);
    }
  });
}