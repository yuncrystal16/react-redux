/**
 * Created by YUN on 4/7/17.
 */
import React from 'react';
import { Card, WingBlank, WhiteSpace,Button } from 'antd-mobile';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';
class DetailComponent extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    createMarkup(html){
        return {
            __html:html
        };
    }




    render() {
        const { post, deletePost } = this.props;
        const footerContent = () => {
            return (
                <div>
                    作者：{post.author}
                    <br/>
                    分类：{post.categories}
                </div>
            )
        };

        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title={'标题：'+post.title}
                            extra={<button className="btnDelete" onClick={deletePost}>删除</button>}
                        />
                        <Card.Body>
                            <div dangerouslySetInnerHTML={this.createMarkup(post.content)}/>
                        </Card.Body>
                        <Card.Footer content={footerContent()} extra={<div>{post.postTime}</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }
}

DetailComponent.propTypes = {
    post:PropTypes.object,
    deletePost: PropTypes.func
}

export default DetailComponent;