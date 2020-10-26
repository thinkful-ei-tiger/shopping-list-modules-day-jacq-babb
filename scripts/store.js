import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function(id) {
    return this.items.find(currentItem => currentItem.id === id);
}

const addItem = function(name) {
    try {
        items.validateName(name);
        this.items.push(items.create(name));
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
};

const findAndToggleChecked = function(id) {
    const currentItem = this.findById(id);
    currentItem.checked = !currentItem.checked;
}

const findAndUpdateName = function (id, name) {
    try {
        items.validateName(name)
        const currentItem = this.findById(id);
        currentItem.name = name;
    } catch (error) {
        console.log(`Cannot update item: ${error.message}`);
    };
};

const findAndDelete = function( id) {
    this.items = this.items.filter(currentItem => currentItem.id !== id);
}

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
};
