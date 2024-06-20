const router = require('express').Router();
const path = require('path');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/login')
    } else{
        next()
    }
}

router.get('/userdata' , authCheck, (req, res) => {
    res.send(req.user)
})

router.get('/', authCheck ,  (req, res) => {

    const buildPath = (__dirname, 'client/build');

    res.sendFile(path.resolve(buildPath, 'index.html'));
})
 
module.exports = router;