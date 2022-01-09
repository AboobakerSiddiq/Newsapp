const fetchTech=(state={
    articles:[]
    }, action)=>{
        if(action.type === "FETCH_TECH"){
            
            state= {...state, articles: action.payload}
        }
    
        return state;
    };
    export default fetchTech;