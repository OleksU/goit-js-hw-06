class Storage {
    #item;
    constructor(item){
        this.#item = item;
    }
    getItems(){
        return this.#item;
    }
    addItem(newItem) {
        return this.#item.push(newItem);
    }
    removeItem(itemToRemove) {
        if (this.#item.includes(itemToRemove)){
            this.#item = this.#item.filter(arr => arr!== itemToRemove);
        }
    } 
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());