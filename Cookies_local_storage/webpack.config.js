const path = require('path');

module.exports = {
  mode: 'development', // You can change this to 'production' when you're ready to deploy
  entry: './src/index.js', // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''), // The directory where your index.html is
    },
    compress: true,
    port: 8080, // The port you want to use
  },
};
