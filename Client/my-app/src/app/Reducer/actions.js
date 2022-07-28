

export function getInvertText(text) {
    return function(dispatch) {
      return fetch(`https://api-challenge-text.herokuapp.com/iecho?text=${text}`)
        .then(response => response.json())
        .then(json => {
          if(json.hasOwnProperty("error")){
            dispatch({ type: "GET_INVERTED_TEXT_ERROR", payload: json.error });
          }else{
            dispatch({ type: "GET_INVERTED_TEXT", payload: json });
          }
        })
    };
  }

export function cleanError(){
  return function(dispatch) {
    return dispatch({ type: "CLEAN_ERROR", payload: null });
        
  };
}
  