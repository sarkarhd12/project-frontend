import * as actionTypes from "./ActionType";

const initialState={
   messages:[],
   loading:false,
   error:null,
   chat:null
}

export const chatReducer=(state=initialState,action)=>{
    switch(action.type){
     
        case actionTypes.FETCH_MESSAGE_REQUEST:
        case actionTypes.SEND_MESSAGE_REQUEST:
        case actionTypes.FETCH_CHAT_MESSAGE_REQUEST:

        return {
         ...state,
         loading:true,
         error:null
        };

        case actionTypes.FETCH_MESSAGE_SUCCESS:
        case actionTypes.FETCH_CHAT_MESSAGE_SUCCESS:
            return {
                ...state,
                loading:false,
                messages:action.messages
            }

         case actionTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading : false,
                messages : [...state.messages,action.message]
            } 
            
        
            case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    chat : action.chat
                }     
         
         case actionTypes.FETCH_MESSAGE_FAILURE:
         case actionTypes.SEND_MESSAGE_FAILURE:
         case actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE:
            
         return {
            ...state,
            loading:false,
            error:action.error
         }


      default:
       return state;

}
}