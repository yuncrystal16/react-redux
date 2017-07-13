/**
 * Created by YUN on 21/6/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//引入post 的所有 action
import { fetchPosts } from '../../../common/actions/postActions';
import { bindActionCreators } from 'redux';
import Header from '../../../pages/Header/components';
//引入dump组件
import PostListComponent from '../components/PostListComponent';

class PostListContainer extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, history} = this.props;
        return (
            <div>
                <Header title='近期帖子' rightLink='/' rightLinkContent='Home'/>
                {
                    posts
                    ? <PostListComponent posts={posts} history={history}/>
                        : <h1>Loading</h1>

                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         postActions: bindActionCreators(postActions,dispatch)
//     }
// }

export default connect(mapStateToProps,{fetchPosts})(PostListContainer);