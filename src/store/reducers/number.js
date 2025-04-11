export function numberReducer(state, action) {

    switch (action.type) {

        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
                
        case 'numberDivider25':
            return { ...state, number: state.number / 25 }

        case 'numberParser':
            return { ...state, number: parseInt(state.number) }

        case 'addNumber':
            return { ...state, number: state.number + action.n }

        default:
            return state

    }

}