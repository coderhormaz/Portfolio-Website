// A more robust clean script that handles permission errors
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const nextDir = path.join(__dirname, '.next');

// Function to check if .next directory exists
console.log(`Checking for .next directory at ${nextDir}`);
if (fs.existsSync(nextDir)) {
  console.log('.next directory found, attempting to remove...');
  
  // Try using rmdir /s /q on Windows which can handle some permission issues
  const command = process.platform === 'win32' 
    ? `rmdir /s /q "${nextDir}"` 
    : `rm -rf "${nextDir}"`;
  
  console.log(`Executing: ${command}`);
  
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      console.log('Attempting to remove .next directory with alternative approach...');
      
      // If the command fails, try closing any processes that might be locking files
      if (process.platform === 'win32') {
        // On Windows, try to forcefully unlock the directory
        console.log('Attempting to close processes that might be locking files...');
        exec('taskkill /f /im node.exe', (err, stdout, stderr) => {
          console.log('Attempted to kill Node processes. Now attempting directory removal again.');
          
          // Wait a moment for processes to fully terminate
          setTimeout(() => {
            exec(`rmdir /s /q "${nextDir}"`, (err, stdout, stderr) => {
              if (err) {
                console.error(`Failed to remove .next directory: ${err.message}`);
                console.log('Please manually delete the .next directory and try again.');
              } else {
                console.log('.next directory removed successfully after killing processes');
              }
            });
          }, 1000);
        });
      } else {
        console.error('Failed to remove .next directory. Please delete it manually.');
      }
    } else {
      console.log('.next directory removed successfully');
    }
  });
} else {
  console.log('.next directory does not exist, no cleanup needed');
}
