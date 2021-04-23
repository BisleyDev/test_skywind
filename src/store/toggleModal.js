import {makeAutoObservable} from "mobx";

class ToggleModal {
    isOpen = true;
    constructor() {
        makeAutoObservable(this)
    }

    toggleModalState() {
        // this.isOpen = !this.isOpen
        console.log(this)
    }
}

export default new ToggleModal();