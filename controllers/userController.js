const UserModel = require('../models/User');

exports.insert = (req, res) => {
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};