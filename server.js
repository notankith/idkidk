// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stickers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Sticker Schema
const stickerSchema = new mongoose.Schema({
    productName: String,
    productCode: String,
    mrp: String,
    expiry: String,
    contact: String
});
const Sticker = mongoose.model('Sticker', stickerSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/stickers', (req, res) => {
    const { productName, productCode, mrp, expiry, contact } = req.body;
    const newSticker = new Sticker({
        productName: productName,
        productCode: productCode,
        mrp: mrp,
        expiry: expiry,
        contact: contact
    });
    newSticker.save((err, sticker) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).json(sticker);
        }
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
