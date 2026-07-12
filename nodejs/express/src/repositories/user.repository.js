import User from "../models/user.model.js";

export const createUser = async (userData) => {
    const user = await User.create(userData);

    const userObject  = user.toObject();

    delete userObject.password

  return userObject;
};

export const getUserByEmail = async (email) => {
  return await User.findOne({email}).select('-password');
};
