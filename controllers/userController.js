const User = require('../models/user');

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
    res.render('./user/profile')
}

exports.create = (req, res, next) =>
{
    let user = new User(req.body);
    console.log(user);
    user.save()
    .then(() => res.redirect('/profile'))
    .catch(err => 
        {
            if (err.name === 'ValidationError')
            {
                req.flash('error', err.message);
                return res.redirect('/users/new')
            }

            if (err.code === 11000)
            {
                req.flash('error', "Email already in use.")
                return res.redirect('/users/new')
            }
            next(err);
        });
}