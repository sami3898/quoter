 // API GET Method function
 export function getRequest(url,headers,callback) {
    fetch(url,{
            method: 'GET',
            //headers: headers
        }).then(response => response.json())
        .then(responseJSON => {
            callback(null, responseJSON)
        })
        .catch(error => {
            callback(JSON.stringify(error), null)
    });
 }

 // Export function
 export default {
     getRequest
 }