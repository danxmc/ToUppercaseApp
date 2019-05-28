const express = require('express');
const router = express.Router();

// @route   POST api/strings
// @desc    Convert the string to Uppercase
// @access  Public
router.post('/', (req, res) => {
    const inputString = req.body.inputString;

    try {
        resultString = inputString.toUpperCase();
        res.json({
            resultString
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;