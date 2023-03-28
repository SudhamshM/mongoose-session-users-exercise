const model = require('../models/user');

exports.index = (req, res, next)=>{
    //res.send('send all stories');
    model.find()
    .then(stories=>res.render('./user/index', {stories}))
    .catch(err=>next(err));
};