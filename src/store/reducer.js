export default function reducer(state, action) {
   switch (action.type) {
      case 'FILTER':
         return {...state, filterBy: action.payload};
      case 'FETCH':
         return {...state, data: action.payload};
      case 'FOOD':
         return {...state, food: action.payload}
      case 'ADD-TO-CART':
         if (state.addToCart.length !== 0) {
            return {
               ...state, addToCart: [...state.addToCart, state.addToCart.map(v =>
                  v.name === action.payload.name && v.price === action.payload.price ?
                     {["count"]: v.count + 1, ["totalPrice"]: (v.count + 1) * v.price} : v
               )]
            }
         } else
            return {...state, addToCart: [...state.addToCart, action.payload]}
   }
}