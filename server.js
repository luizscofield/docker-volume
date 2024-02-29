// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage
}).single('myImage');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve uploaded images
app.use('/uploads', express.static('uploads'));


// Handle image upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(500).send('Error uploading file');
        } else {
            res.status(200).send('File uploaded successfully');
        }
    });
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve uploaded images
app.get('/images', (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) {
            res.status(500).send('Error reading directory');
        } else {
            const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.png' || path.extname(file).toLowerCase() === '.jpg');
            res.json(imageFiles);
        }
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
