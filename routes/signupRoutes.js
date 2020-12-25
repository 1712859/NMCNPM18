let express = require('express');
let router = express.Router();

router.post('/', async(req, res, next) => {
    res.redirect('/');
});


module.exports = router;