export default (store) => (next) => async (action) => {

    if(!action.payload || !action.payload.then ){
        //No payload property
        //-or-
        //Not a promise
    
        return next (action);
        
    }
//Has a promised on the payload prrperty

const resp = await action.payload;

const newAction ={
    ...action,
    payload:resp
}

store.dispatch(newAction);

return resp;



// action.payload.then((resp) => {
//     const newAction = {
//         ...action,
//         payload:resp
//     }

//     store.dispatch(newAction);
// });
    
//     return action.payload;
// };

// export default(store) => (next) => (action) => {
//     //code goes here
//     export default function (store){
//         return function (next){
//             return function (action) {
//                 //code goes here
//             }
//         }
//     }
} 