const User = require("./schemas/users")

const authenticate = (username, password) => {
    // User.byEmail
    var authInfo = {
        userExists : false,
        isAuthenticated : false
    }
    result =  User.userModel.findOne({email : username})
    if(result.length){
        authInfo.userExists = true
        authInfo.authenticate = (result.password == password)
    }
    return authInfo
}

module.exports = {
    authenticate : authenticate
}