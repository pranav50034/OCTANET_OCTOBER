const users = require("../models/model.User")
const checkUser = async(email, username) => {

    let userData = {
        data: null,
        err: null
    }
    try {
        userData.data = await users.find({$or: [{email}, {username}]});
        if(userData.data.length==0){
            userData.data=null
        }
    } catch (error) {
        userData.err = error;
    }

    return userData;
}

module.exports = {checkUser}