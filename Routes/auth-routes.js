const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) =>{
    res.json({"Login page" : "login"})
});

//primeira run
router.get('/bungie', passport.authenticate('bungie'));
//segunda run
router.get('/bungie/redirect', passport.authenticate('bungie'), (req,res) =>{
    res.json({'Oba': 'Você alcançou a response'})
})

module.exports = router;