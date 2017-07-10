/**
 * Created by YUN on 16/6/17.
 */
const isMock = true;

function getUrl(obj){
    if(isMock){
        return obj.mockUrl;
    }else{
        return obj.url;
    }
}


export default {
    getPosts: getUrl(
        {
            mockUrl: '/api/posts/',
            url: 'http://react.them.localhost/wp-json/wp/v2/posts/',
            method: 'get',
        }
    ),
    categoriesUrl:getUrl({
        mockUrl: '/api/categories/',
        url: ''
    })
}