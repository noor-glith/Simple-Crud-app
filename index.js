const express = require('express');
const productRoute = require('./routes/product.route.js');
const Product = require('./models/product.model.js');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes

app.use('/api/products', productRoute);

// Route for root path
app.get('/', (req, res) => {
  res.send('Welcome to Simple CRUD App! Awesome');
});




// Connect to MongoDB, then start the server


mongoose.connect('mongodb+srv://manorj433:FI5cRNDnSf5ZDKYt@backenddb.gm9j3xg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb')
  .then(() => {
    console.log('Connected!');
    app.listen(port, () => {
      console.log(`Server is running on port ${port} from index.js`);
    });
  })
  .catch((err) => {
    console.log('Connection failed!', err.message);
  });

