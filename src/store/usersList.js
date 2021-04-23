import {makeAutoObservable} from "mobx";

class UsersList {
    usersList = [];
    constructor() {
        makeAutoObservable(this)
    }
    addUser(user) {
        this.usersList.push(user)
    }
    removeUser(userRemove) {
        this.usersList = this.usersList.filter((user) => user !== userRemove)
    }
}

// export default new UsersList();