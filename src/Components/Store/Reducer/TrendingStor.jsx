const initCard = JSON.parse(localStorage.getItem('movie')) || []

function useReducerCard(state = initCard, action){
    if (action.type == 'add_watch') {
        let new_Array = [...state]
        if (new_Array.length == 0) {
            new_Array.push(action.payload)
            localStorage.setItem('movie', JSON.stringify(new_Array))
        }else{
            let sanoq = 0
            new_Array.map((item, index) => {
                if (item.title === action.payload.title) {
                    sanoq = 1
                }
            })

            if (sanoq !== 1) {
                new_Array.push(action.payload)
                localStorage.setItem('movie', JSON.stringify(new_Array))
            }

            if (action.type === 'del_watch') {
                let current = [...state]
                let son = current.map((item, index) => {
                    if (item.title === action.payload.title){
                        return index
                    }
                    current.splice(son , 1)
                    return state = current
                })
            }
        }
        return state = new_Array
    }
    return state
}

export {useReducerCard};