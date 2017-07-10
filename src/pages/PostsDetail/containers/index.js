/**
 * Created by YUN on 30/6/17.
 */
import React from 'react';
import { fetchPost,deletePost } from '../../../actions/postActions';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../../pages/Header/components';
import DetailComponent from '../components/DetailComponent';

class PostsDetail extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    /**
     * 删除帖子
     */
    deletePost() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/posts');
        });
    }




    render() {
        const { post } = this.props;
        if(!post) {
            return <div>Loading</div>
        }
        return (
            <div>
                <Header title="正文" rightLink='/posts' rightLinkContent='返回列表'/>
                <DetailComponent post={post} deletePost={this.deletePost}/>
            </div>
        )
    }
}

/**
 * ownProps 这个参数相当于这个class的this.props
 * @param state
 * @param ownProps === this.props
 * @returns {{posts: *}}
 */
function mapStateToProps(state,ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps,{fetchPost,deletePost})(PostsDetail);

