/**
 * Created by YUN on 10/7/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../Header/components';
import CountComponent from '../components/CountComponent';
import { increaseCount, decreaseCount} from '../actions/countAction';

class index extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        this.props.increaseCount();
    }

    handleDecrease() {
        this.props.decreaseCount();
    }

    render() {
        return (
            <div>
                <Header title='Demo' rightLink='/posts' rightLinkContent='近期热帖'/>
                <CountComponent
                    count={this.props.count}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}


export default connect(mapStateToProps,{increaseCount,decreaseCount})(index);
