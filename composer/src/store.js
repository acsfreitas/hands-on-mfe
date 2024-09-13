import { createStore } from 'redux';

const initialState = { contacts: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADICIONAR':
            state.contacts.push(action.value)
            return { contacts: state.contacts };
        case 'REMOVER':
            state.contacts.pop(action.value);
            return { contacts: state.contacts};
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store;
