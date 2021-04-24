import {makeAutoObservable} from "mobx";

class ToggleModal {
    isOpen = false;
    constructor() {
        makeAutoObservable(this)
    }

    toggleModalState() {
        this.isOpen = !this.isOpen
    }
}

export default new ToggleModal();