const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const nextDir = path.join(__dirname, '.next');

// Check if .next directory exists
if (fs.existsSync(nextDir)) {
  console.log('Removing .next directory...');
  
  // Remove .next directory with rimraf (handles permissions better)
  rimraf.sync(nextDir);
  
  console.log('.next directory removed successfully');
} else {
  console.log('.next directory does not exist, no cleanup needed');
}
