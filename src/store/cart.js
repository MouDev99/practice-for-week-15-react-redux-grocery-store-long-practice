const ADD_ITEM = 'cart/addItem';
const REMOVE_ITEM = 'cart/removeItem';
const INCREMENT_ITEM_COUNT = 'cart/incrementItemCount';
const DECREMENT_ITEM_COUNT = 'cart/decrementItemCount';
const UPDATE_ITEM_COUNT_WITH_INPUT_VALUE = 'cart/updateItemCountWithInputValue';
const EMPTY_THE_CART = 'cart/emptyTheCart';

export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        id
    };
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    };
};

export const incrementItemCount = (id) => {
    return {
        type: INCREMENT_ITEM_COUNT,
        id
    };
};

export const decrementItemCount = (id) => {
    return {
        type: DECREMENT_ITEM_COUNT,
        id
    };
};

export const updateItemCountWithInputValue = (id, inputValue) => {
    return {
        type: UPDATE_ITEM_COUNT_WITH_INPUT_VALUE,
        id,
        inputValue
    };
};

export const emptyTheCart = () => {
    return { type: EMPTY_THE_CART }
};

const initialState = { addedItemIds: [] };

const cartReducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const id = action.id;
    switch (action.type) {
        case ADD_ITEM:
            newState.addedItemIds.push(id);
            newState[id] = {id, count: 1}
            return newState;
        case REMOVE_ITEM:
            const idxOfItemId = newState.addedItemIds.indexOf(id);
            newState.addedItemIds.splice(idxOfItemId, 1);
            delete newState[id];
            return newState;
        case INCREMENT_ITEM_COUNT:
            newState[id].count++;
            return newState;
        case DECREMENT_ITEM_COUNT:
            newState[id].count--;
            return newState;
        case UPDATE_ITEM_COUNT_WITH_INPUT_VALUE:
            newState[id].count = action.inputValue;
            return newState;
        case EMPTY_THE_CART:
            return { ...initialState };
        default:
            return state;
    };
};

export default cartReducer;

export const getCartItemsWithProduceDetails = state => {
    const produce = state.produce;
    return state.cart.addedItemIds
        .map(id => {
            return {
            ...state.cart[id],
            ...produce[id]
            }
        });
};
