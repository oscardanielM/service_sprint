const User = require("./../models/user")

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(User){
        const Array = [];
        Array.push(User.id, User.username, User.name, User.bio, User.dateCreated, User.lastUpdate)
        return Array;
    }

    static updateUserUsername(User, username){
        User.username = username;
        return User;
    }

    static getAllUsernames(Datos){
        return Datos.map( (user) => user.username )
    }
}

module.exports = UserService;