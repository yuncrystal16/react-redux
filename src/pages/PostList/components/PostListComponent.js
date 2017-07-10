/**
 * Created by YUN on 21/06/2017.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

//引入列表
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


class PostListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
        this.renderWithMapKey = this.renderWithMapKey.bind(this);
    }

    createMarkup(html){
        return {
            __html:html
        };
    }

    /**
     *使用wp api时
     */
    renderWPthem() {
        return this.props.posts.map((post) => {
            return (
                <Item
                    key={post.id}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => {}}
                >
                    {post.title.rendered}
                    <Brief>{moment(post.date).format("MM-DD-YYYY hh:mm:ss")} | </Brief>
                    <Brief><div dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)}/></Brief>
                </Item>
            )
        })
    }

    /**
     *reducer中返回的data没有使用 _.mapKeys时，返回的posts列表为数组时
     */
    renderWithMap(){
        return this.props.posts.map((post) => {
            return (
                <Item
                    key={post.id}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => {
                        // this.props.history.push('/posts/{}');
                    }}
                >
                    {post.title}  <Brief>{post.categories}</Brief>
                    <Brief>{post.content}</Brief>
                </Item>
            )
        })
    }


    /**
     *reducer中返回的data使用 _.mapKeys时，返回的posts列表为object对象
     */
    renderWithMapKey() {
        return _.map(this.props.posts,post=>{
            return (
                <Item
                    key={post.id}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => {
                        const url = `/posts/${post.id}`;
                        this.props.history.push(url);
                    }}
                >
                    {post.title}  <Brief>{post.categories}</Brief>
                    <Brief>{post.content}</Brief>
                </Item>
            )
        })

    }



    render() {
        return (
        <List className="my-list">
            {
                this.renderWithMapKey()
            }

        </List>
        )
    }
}
PostListComponent.propTypes = {
 // posts:PropTypes.array
    posts:PropTypes.object
}

export default PostListComponent;