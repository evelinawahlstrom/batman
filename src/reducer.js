import { statement } from "@babel/template";

const initialState = {
    name: 'Batman',
    health: 5,
    inventory: [],
    heroic: true,
    weapon: {
      type: 'bazooka',
      damage: 3
    }
  }
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case "REST": 
    return {...state, health: 10} 
    case "pickUpWeapon":
        return {...state, inventory:
            [...state.inventory, { ...action.payload}]
        }  
    case "CHANGE_NAME":
        return {...state, name: action.payload }
    default:
      return state
    }
  }
  
  export default reducer

  /*{case "REST": return{...state, health: 10}
  don't forget it's an object you are returning, you need to pass that in the return
  - return {}
    

}*/