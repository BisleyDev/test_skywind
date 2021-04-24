import {makeAutoObservable} from "mobx";

class UsersList {
    users = [
        {
            id: Date.now(),
            time: '00:00:00',
            name: 'Ivan',
            status: true
        }
    ];

    constructor() {
        makeAutoObservable(this)
        this.timerUserActive()
    }

    addUser(user) {
        this.users.push({
            id: Date.now(),
            time: '00:00:00',
            name: user,
            status: false,
        },)
    }

    removeUser(id) {
        this.users = this.users.filter((user) => user.id !== id)
    }

    changeStatus(id) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                const updateUser = { ...user , status : !user.status}
                if(updateUser.status) {

                }
                return updateUser
            }
            return  user;
        })
    }

    getUsersList() {
        return this.users
    }

    timerUserActive() {
        setInterval(() => {

            this.users = this.users.map(user=> {
                if(user.status) {
                    let [hours, minutes, seconds] = user.time.split(':').map(el=> +el)
                    const newSeconds = seconds + 1 >= 60 ? '00' && minutes+1 : seconds + 1
                    const newMinutes = minutes >=60 ? '00' && hours+1 : minutes
                    const newTime = `${this.setZero(hours)}:${this.setZero(newMinutes)}:${this.setZero(newSeconds)}`
                    return {
                        ...user,
                        time: newTime
                    }
                }
                return user
            })
        }, 1000)
    }

    setZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
}

export default new UsersList();

