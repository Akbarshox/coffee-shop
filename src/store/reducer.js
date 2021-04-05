export default function reducer(state, action) {
   switch (action.type) {
      case 'FILTER':
         return {...state, filterBy: action.payload};
      case 'FETCH':
         return {...state, data: action.payload};
      case 'FOOD':
         return {...state, food: action.payload}
      case 'ADD-TO-CART':
         const exists = state.addToCart.some((p) => p.name === action.payload.name && p.price === action.payload.price);
         if (exists) {
            const addToCart = state.addToCart.map(v =>
               v.name === action.payload.name && v.price === action.payload.price ? {...v, ["count"]: ++v.count} : v
            );
            return {...state, addToCart}
         } else
            return {...state, addToCart: [...state.addToCart, action.payload]}
      case 'DECREMENT-FROM-CART':
         const remove = state.addToCart.some((p) => p.name === action.payload.name && p.price === action.payload.price);
         if (remove) {
            const addToCart = state.addToCart.map(v =>
               v.name === action.payload.name && v.price === action.payload.price && v.count > 1 ? {
                  ...v,
                  ["count"]: v.count - 1
               } : v
            );
            return {...state, addToCart}
         } else
            return {...state, addToCart: [...state.addToCart, action.payload]}
      case 'REMOVE-FROM-CART':
         return {
            ...state,
            addToCart: state.addToCart.filter(v => v.name !== action.payload.name && v.price !== action.payload.price)
         }
   }
}