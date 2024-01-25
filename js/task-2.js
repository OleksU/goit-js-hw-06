class Storage {
    constructor(item){
        this.item = item;
    }
    getItems(){
        return this.item;
    }
    addItem(newItem) {
        return this.item.push(newItem);
    }
    removeItem(itemToRemove) {
        this.item.filter(item => item === itemToRemove);
        return this.item !== itemToRemove;
    } 
    // Tried with different functions(slice, filter, for...) - 
    //doesn`t work...
    //maybe missing something....
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());