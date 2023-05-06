const User = require('../models/user.model')
const createError = require('http-errors')
const jwt = require("jsonwebtoken")
const moment = require('moment')

const MAX_SESSION_DAYS = parseInt(process.env.MAX_SESSION_DAYS || 1)

module.exports.create = (req, res, next) => {
  User.create(req.body)
  .then((user) => res.json(user))
  .catch(next)
}

module.exports.login = (req, res, next) => {
  User.findOne({ username: req.body.email })
    .then((user) => {
      if (!user) {
        return next(createError(401, { errors: { password: 'Invalid credentials' }}));
      }

      if (!user.confirm) {
        return next(createError(401, { errors: { email: 'Please confirm your account' } }));
      }

      user.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, { errors: { password: 'Invalid credentials' } }));
        }

        const token = jwt.sign(
          { sub: user.id, exp: moment().add(MAX_SESSION_DAYS, 'days').valueOf() / 1000 },
          
          process.env.JWT_SECRET
        );

        res.json({ token, ...user.toJSON() });
      });
    })
    .catch(next);
};


module.exports.list = (req, res, next) => {
  User.find() 
  .then((users) => res.json(users))
  .catch(next)
}

module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);
  req.user.save()
      .then((user) => res.json(user))
      .catch(next)
}

module.exports.detail = (req, res, next) => res.json(req.user)


module.exports.delete = (req, res, next) => {
  User.deleteOne({_id: req.user.id})
  .then(() => res.status(204).send())
  .catch(next)
}