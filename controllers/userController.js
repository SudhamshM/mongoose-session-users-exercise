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
    let id = req.session.user;
    console.log(req.flash());
    User.findById(id)
    .then((user) => res.render('/users/profile', {user}))
    .catch(err => next(err));
}

exports.logout = (req, res, next) =>
{
    res.redirect('/login');
}

exports.login = (req, res, next) =>
{
     // authenticate user login request
     let email = req.body.email;
     let password = req.body.password;
 
     // get the user that matches the email
     User.findOne({email: email})
     .then((user) =>
     {
         if (user)
         {
             // user found in db
             user.compare(password)
             if (user.compare(password))
             {
                req.session.user = user._id; // store user id in db
                req.flash('success', 'You have successfully logged in.');
                res.redirect('/users/profile')
             }
             else
             {
                req.flash('error', 'Wrong password.');
                console.log('wrong password');
                res.redirect('/users/login')
             }
        }
         else
         {
            req.flash('error', 'Wrong email address.');
            console.log("wrong email address")
            res.redirect('/users/login')
         }
     })
     .catch(err => next(err))
}

exports.create = (req, res, next) =>
{
    let user = new User(req.body);
    console.log(user);
    user.save()
    .then(() => res.redirect('/users/profile'))
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