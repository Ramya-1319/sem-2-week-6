const User = require('../models/User');

exports.create = (data) => User.create(data);
exports.findByUsername = (username) => User.findOne({ username });