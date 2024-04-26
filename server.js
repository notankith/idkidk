const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://jadenr4545:love@cluster0.apgwp9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Sticker model
const Sticker = mongoose.model('Sticker', new mongoose.Schema({
  MRP: String,
  expiry: String,
  productName: String,
  productCode: String,
  contact: String
}));

// Middleware
app.use(express.json());

// Routes
app.get('/stickers', async (req, res) => {
  const stickers = await Sticker.find();
  res.send(stickers);
});

app.post('/stickers', async (req, res) => {
  const sticker = new Sticker(req.body);
  await sticker.save();
  res.send(sticker);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
