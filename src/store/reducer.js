export default function reducer(state, action) {
   switch (action.type) {
      case 'FILTER':
         return {...state, filterBy: action.payload};
      case 'FETCH':
         return {...state, data: action.payload};
      case 'FOOD':
         return {...state, food: action.payload}
   }
}