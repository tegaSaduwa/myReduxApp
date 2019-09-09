import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS, UPDATE_CONTACTS } from '../actions/Types';

const initialState = {
    contacts: [
        // {
        //   id: 1,
        //   name: 'John Doe1',
        //   email: 'john@gmail.com',
        //   phone: '555-555-5555'
        // },
        // {
        //   id: 2,
        //   name: 'Karen Williams',
        //   email: 'karen@gmail.com',
        //   phone: '444-444-4444'
        // },
        // {
        //   id: 3,
        //   name: 'Henry Johnson',
        //   email: 'henry@gmail.com',
        //   phone: '333-333-333'
        // }
      ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS : return {
            ...state,
            contacts: action.payload
        };
        case DELETE_CONTACTS : return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        case ADD_CONTACTS : return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        case UPDATE_CONTACTS : return {
          ...state,
          contacts: state.contacts.map(
            contact => contact.id === action.payload.id ? ( contact = action.payload ) : contact
          )
      };
        default:
            return state;
    }
}