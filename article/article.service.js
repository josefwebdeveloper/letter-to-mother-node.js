const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Article = db.Article;

module.exports = {
    getAll,
    getById,
    create,
    getRandom
};


async function getAll() {
    console.log('getAll');

    return await Article.find();
}

async function getById(id) {
    return await Article.findById(id);
}

async function getRandom() {
    console.log('getRandom');
    return await Article.aggregate([{$sample: {size: 1}}]);
}


async function create(articleParam) {

    const article = new Article(articleParam);
    article.createdDate = new Date();

    // save user
    await article.save();
}

// async function update(id, userParam) {
//     const user = await User.findById(id);
//
//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }
//
//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }
//
//     // copy userParam properties to user
//     Object.assign(user, userParam);
//
//     await user.save();
// }
//
// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }