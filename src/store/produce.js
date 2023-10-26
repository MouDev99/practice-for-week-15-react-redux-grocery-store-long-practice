import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const TOOGLE_PRODUCE_LIKE = 'produce/toggleProduceLike';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};

export const toggleProduceLike = (produce) => {
    return {
        type: TOOGLE_PRODUCE_LIKE,
        produce
    };
};

const initialState = {};

const produceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach( item => newState[item.id] = item );
            return newState;
        case TOOGLE_PRODUCE_LIKE:
            const produce = action.produce;
            const { id, liked } = produce;
            return { ...state, [id]: { ...produce, liked: !liked } };
        default:
            return state;
    };
};

export default produceReducer;

export const getAllProduce = state => Object.values(state.produce);

export const getCartItemByProduceId = (produceId) => (state) => {
    return state.cart[produceId];
};
