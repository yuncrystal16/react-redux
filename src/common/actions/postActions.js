/**
 * Created by YUN on 16/6/17.
 */

import * as actionType from '../constants/posts';
import { getRequest,postRequest,deleteRequest } from '../fetch/requests';
import db from '../db'

const GET_POST_URL = db.getPosts;

/**
 * 获取所有Posts 数据
 * @returns {{type, payload: *}}
 */
function fetchPosts() {
    /**
     * 用axios写法如下
     */
    const request = getRequest(GET_POST_URL);
    // console.log('action:',request);
    return {
        type:actionType.FETCH_POSTS,
        payload:request
    }

    /**
     * 用fetch写法如下
     */
    // const result =  getRequest(GET_POST_URL);
    // console.log('action:',result);
    // return result.then(res=>{
    //     return res.json();
    // }).then(json=>{
    //     return {
    //         type:actionType.FETCH_POST,
    //         payload:json
    //     }
    // })
}

/**
 * 创建一个新的post
 * @param values
 * @param callback
 * @returns {{type, payload: (Promise.<T>|Promise<U>|*|Promise)}}
 */
function createPost(values,callback) {
    const request =  postRequest(GET_POST_URL,values)
        .then(()=>callback())
        .catch((error)=>{
            console.log('error:',error);
        });
    return {
        type:actionType.CREATE_POST,
        payload:request
    }
}


/**
 * 根据post id获取一个post的详情
 * @param id
 * @returns {{type, payload: *}}
 */
function fetchPost(id) {
    const request = getRequest(GET_POST_URL+id);
    return {
        type:actionType.FETCH_POST,
        payload:request
    }
}

/**
 * 根据 post id 删除一个帖子，删除成功后跳转到列表页面
 * @param id
 * @returns {{type, payload: *}}
 */
function deletePost(id,callback) {
    const request = deleteRequest(GET_POST_URL,id)
        .then(()=>callback());
    return {
        type:actionType.DELETE_POST,
        payload:id
    }
}

export {
    fetchPosts,
    fetchPost,
    createPost,
    deletePost
}