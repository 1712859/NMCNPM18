let express = require('express');
let router = express.Router();
let homeController = require('../controllers/homeController');
router.post('/', async(req, res, next) => {
    let name = req.body.Name;
    let pass = req.body.Password;

    if (name == "anhtu" && pass == "123456") {
        req.session.user = "true"
        var temp = await homeController.getChotGiaoThong();
        console.log(temp)
        res.redirect('/')
    } else {
        res.redirect('/')
    }
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error);
        }
        return res.redirect('/login');
    });
});


module.exports = router;