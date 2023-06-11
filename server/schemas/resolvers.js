const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log("signup", user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect email");
        }
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("incorrect password");
        }
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    addGameToUser: async (parent, { profileId, game }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: profileId },
          { $push: { games: game } },
          { new: true }
        );
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
