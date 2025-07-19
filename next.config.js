/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow LAN/dev access from your local network
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.0.105:3000', // Add your LAN IP here
  ],
};

module.exports = nextConfig;
