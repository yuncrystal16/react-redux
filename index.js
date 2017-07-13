/**
 * Created by YUN on 21/6/17.
 */

import React from 'react';
import {render} from 'react-dom';
import { HashRouter as Router, Route,Switch} from 'react-router-dom';

// 引入 redux
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory'
import configureStore from './src/common/store/configureStore'
// 通用样式
import './src/common/static/css/common.less';
import './src/common/static/css/font.css';


// import 也页面组件
import HomePage from './src/pages/HomePage/containers';
import PostList from './src/pages/PostList/containers';
import PostsDetail from './src/pages/PostsDetail/containers';
import Count from './src/pages/Count/containers';


const store = configureStore();
const history = createHistory();

render(
    <Provider store={store} >
    <Router history={history}>
        <Switch>
            <Route path ='/posts/:id' component={PostsDetail} />
            <Route path ='/posts' component={PostList} />
            <Route path ='/count' component={Count} />
            <Route path ='/' component={HomePage} />
            <Route render={( )=>{
                return (
                    <h1>Not Found</h1>
                )
            }}/>
        </Switch>
    </Router>
    </Provider>,
    document.getElementById('app')
);