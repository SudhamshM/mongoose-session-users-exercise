const model = require('../models/user');

exports.index = (req, res, next) => 
{
    res.render('./user/login');
}

exports.new = (req, res, next) => 
{
    //res.send('go to login');

    res.render('./user/new');
};

exports.show = (req, res, next) =>
{
    res.render('./user/profile');
}

exports.logout = (req, res, next) =>
{
    res.redirect('/login');
}

exports.login = (req, res, next) =>
{
    res.redirect('/login');
}