const express = require('express');

const router = express.Router();

let poops = 0;

router.get('/poop-count', (request, response) => {
    response.json({poops});
});

router.post('/add-poop', (request, response) => {
    const { newpoops } = request.body;
    
    if (typeof newpoops === 'number') {
        poops += newpoops;
        response.json({ message: "Poops incrememnted!!", poops });
    }
    else {
        response.status(400).json({ message: "Please provide a valid number!!" });
    }
    
});

module.exports = router;