import data from '../Data/Data.json'

const redux = require('redux');
const loadFromSessionStorage=()=> {
    const initialAcc =  JSON.parse(sessionStorage.getItem('loginAcc'))
    return (initialAcc===null)? '' : initialAcc
}
const loadFromLocalStorage=()=> {
    if(!JSON.parse(localStorage.getItem('dataTeacher'))){
        localStorage.setItem('dataTeacher',JSON.stringify(data.teacher))
    }
    const initialAcc =  JSON.parse(localStorage.getItem('dataTeacher'))

    return (initialAcc===null)? '' : initialAcc
}
const initialState ={
    dataAdmin:data.admin,
    dataTeacher:loadFromLocalStorage(),
    drawerOpen:true,
    logAcc:loadFromSessionStorage()
}
const allReducer = (state=initialState,action)=>{
    switch(action.type){
        case "DRAWER":
            return{...state,drawerOpen:!state.drawerOpen}
        case "LOG":
            return {...state,logAcc:loadFromSessionStorage()}
        case "SELECT":
            let data2=[]
            if(action.dataSelect!==null){
                let data1=state.data
                    for(let j=0;j<data1.length;j++){
                        for(let i=0;i<action.dataSelect.length;i++){
                            if (data1[j].institute.indexOf(action.dataSelect[i].value)>=0){
                                console.log(data1[j])
                                data2.push(data1[j])
                            }
                        }
                    }
                console.log(data2)
            }

            return {...state,data:(data2.length>0)?data2:state.data}
        case "UPDATE":{
            console.log(action.dataUpdate)
            localStorage.setItem('dataTeacher',JSON.stringify(action.dataUpdate))
            return state
        }
        default:
            return state
    }
}
const store = redux.createStore(allReducer);
store.subscribe(()=> {
    console.log(JSON.stringify(store.getState()))
})
export default store