const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'mysecret-secret';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },

  getUser: function (token) {
    if (token) {
      try {
        // Verify and decode the token
        const { data } = jwt.verify(token, secret);
  
        // Find the user based on the decoded token
        const user = User.findOne({ _id: data._id });
  
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid or expired token');
      }
    }
  
    throw new AuthenticationError('Token not provided');
  }
};