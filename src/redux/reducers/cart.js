const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {

      const currentIdItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].currentIdItems, action.payload]

      const totalPriceById = currentIdItems.reduce((sum, obj) => obj.price + sum, 0);
      const totalCountById = currentIdItems.length;
      
      const newItems = {
        ...state.items, 
        [action.payload.id]: {
          currentIdItems: currentIdItems,
          totalPriceById: totalPriceById,
          totalCountById: totalCountById,
        }
      };

      const totalCount = Object.keys(newItems).map(id => [].concat.apply([], Object.values(newItems[id]))).reduce((sum, arr) => arr[arr.length - 1] + sum, 0)
      const totalPrice = Object.keys(newItems).map(id => [].concat.apply([], Object.values(newItems[id]))).reduce((sum, arr) => arr[arr.length - 2] + sum, 0)

      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      }
    }

    case 'PLUS_PIZZA': {
      return {
        ...state
      }
    }



    default:
      return state;
  }
};

export default cart