const config = require('config.json');
const db = require('_helpers/db');
const Timer = db.Timer;
// module.exports = create;
module.exports = {
    getTimer,
    create,
    _delete,
    update,
    getRandom
};


async function getTimer() {
    console.log('getTimer');
    return await Timer.find();
}



async function getRandom() {
    console                                                                                                                                     .log('getRandom');
    // return await Article.aggregate([{$sample: {size: 1}}]);
}


async function create() {
    console.log('create');
    await _delete();
    const timer = new Timer();
    timer.startTime = new Date();
    await timer.save();
}

async function update() {
    const timer = await Timer.find();

    // validate
    // if (!user) throw 'User not found';
    // if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
    //     throw 'Username "' + userParam.username + '" is already taken';
    // }

    // hash password if it was entered


    // copy userParam properties to user
    // Object.assign(timer, userParam);
    timer.startTime = new Date();
    await timer.save();
}

//
async function _delete() {
    console.log('delete');
    await Timer.deleteMany();
}