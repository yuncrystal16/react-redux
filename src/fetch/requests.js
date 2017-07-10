/**
 * Created by YUN on 6/6/17.
 */
import 'whatwg-fetch'
import 'es6-promise'
import axios from 'axios';

/**
 * Fetch Get请求
 * @param url
 */
// function getRequest(url) {
//
//     var result = fetch(url, {
//         // credentials: 'include',
//         headers: {
//             'Accept': 'application/json, text/plain, */*'
//         }
//     });
//     // return result.then(function(response) {
//     //     return response.json();
//     // });
//     return result;
// }
/**
 * Axios Get 请求
 * @param url
 */
function getRequest(url) {

    var result = axios({
        method: 'get',
        url: url,
    });

    return result;
}

/**
 * Fetch POST 请求
 * @param url
 * @param userObj
 */
// function postRequest(url, userObj) {
//
//     var result = fetch(url, {
//         method: 'POST',
//         // credentials: 'include',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userObj)
//     });
//
//     return result;
// }

/**
 * AXIOS POST请求
 * @param url
 * @param obj
 */
function postRequest(url, obj) {
    var result = axios({
        method:'post',
        url:url,
        data:obj
    });
    return result;
}

function putRequest(url,userId,userObj) {
    var result = fetch(url+userId, {
        method: 'PUT',
        // credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    });

    return result;
}


/**
 * Fetch delete 请求
 * @param url
 * @param id
 */
// function deleteRequest(url,id) {
//     var result = fetch(url+id, {
//         method: 'DELETE',
//         headers: {
//             'Accept': 'application/json, text/plain, */*'
//         }
//     });
//     return result;
// }

/**
 * AXIOS DELETE 请求
 * @param url
 * @param id
 */
function deleteRequest(url,id) {
    var result = axios({
        method:'delete',
        url:url+id
    });
    return result;
}



export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
}
