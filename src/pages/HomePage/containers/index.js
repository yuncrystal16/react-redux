/**
 * Created by YUN on 21/6/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import Header from '../../../pages/Header/components';
const Item = List.Item;

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header title='Demo' rightLink='/posts' rightLinkContent='近期热帖'/>
                <List className="my-list">
                    <Item><Link className='fontBlack' to="/count">redux控制数据demo</Link></Item>
                    <Item><Link className='fontBlack' to="/posts">axios获取数据demo</Link></Item>

                </List>
            </div>
        )
    }
}


export default HomePage;