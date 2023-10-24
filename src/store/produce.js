import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};


const initialState = {};

const produceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach( item => newState[item.id] = item );
            return newState;
        default:
            return state;
    };
};

export default produceReducer;
