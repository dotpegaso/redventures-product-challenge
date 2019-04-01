function fetchJSON() {
  const URL = "https://next.json-generator.com/api/json/get/41ORKNZDU";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

export function apiRequest(){
  
  return (dispatch) => {
    return fetchJSON().then(([response, json]) => {
        if(response.status === 200){
        json = json.data;
        dispatch({
          type: "API_REQUEST",
          json
        })
      }
    })
  }
}

export function updateEngine(payload) {
  return { type: "UPDATE_ENGINE", payload }
}

export function updateColor(payload) {
  return { type: "UPDATE_COLOR", payload }
}

