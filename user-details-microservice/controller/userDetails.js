let UserDetail = require("../models/userDetails");
let User = require("../models/user");

module.exports = {
  // get all user
  getAllUserDetails: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("userDetails");
    res.status(200).json(user.userDetails);
  },

  // add new user 
  addNewUserDetail: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const newUserDetail = new UserDetail(req.body);
    const userDetail = await newUserDetail.save();
    user.userDetails.push(userDetail);
    await user.save();
    res.status(201).json({ success: "true" });
  },

  // get user details
  getUserDetail: async (req, res, next) => {
    const { userDetailId } = req.params;
    const user = await UserDetail.findById(userDetailId);
    res.status(200).json(user);
  },

  // delete user details
  deleteUserDetail: async (req, res, next) => {
    const { userDetailId } = req.params;
    const result = await UserDetail.findByIdAndDelete(userDetailId);
    res.status(200).json({ success: "true" });
  },

  // replace user details/update
  replaceUserDetail: async (req, res, next) => {
    const { userDetailId } = req.params;
    const newUserDetail = req.body;
    const result = await UserDetail.findByIdAndUpdate(
      userDetailId,
      newUserDetail
    );
    console.log("result", result);
    res.status(200).json({ success: "true" });
  },
};
