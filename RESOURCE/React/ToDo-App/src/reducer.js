function ActionOnList(state, action) {
    if (action.type == "edit") {
        const newState = state.map((item) => {
            if (item.id == action.payload.id) {
                return { id: item.id, data: action.payload.data }
            }
            return { id: item.id, data: item.data }
        })
        return newState
    }
    else if (action.type == "save") {
        let len = state.length;
        const newState = state + {
            id: state[len - 1].id + 1,
            data: action.payload.data
        }
        return newState
    }

    else if (action.type == "delete"){
        const newState = state.map(item=>{
            if (item.id == action.payload.id){
                return
            }
            else{
                return item
            }
        })

        return newState
    }
    else if (action.type == "finish"){
        const newState = state.map(item=>{
            if (item.id == action.payload.id){
                item.finish = true
                return item
            }
            else{
                return item
            }
        })
        return newState
    }

    return state


}

export default ActionOnList