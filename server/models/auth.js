const User = require("./schemas/users")

const authenticate = async (username, password) => {
    // User.byEmail
    var authInfo = {
        userExists : false,
        isAuthenticated : false
    }
    result =  await User.userModel.findOne({email : username})
    console.log(result)
    if(result){
        authInfo.userExists = true
        authInfo.isAuthenticated = (result.password == password)
    }
    return authInfo
}



const register = async (userInfo) => {
    var result =  await User.userModel.findOne({email : userInfo.username})
    console.log("result for finding ; ", result)
    if(result){
        return {userExists : true}
    }
    else{
        result = await User.userModel.create({
            email : userInfo.username,
            password : userInfo.password,
            firstName : userInfo.firstname,
            lastName : userInfo.lastname
        })
        
        result.userExists = false
        return result
    }
    
}

module.exports = {
    authenticate : authenticate,
    register : register
}

