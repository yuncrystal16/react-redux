/**
 * Created by YUN on 10/7/17.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';
import { List,Button } from 'antd-mobile';
const Item = List.Item;


class CountComponent extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
   
    render() {
        const {count,handleIncrease,handleDecrease} = this.props;
        return (
            <List className="my-list">
                <Item>Count 计数器: {count}</Item>
                <Item>
                    <Button onClick={handleIncrease}>+</Button>
                    <Button onClick={handleDecrease}>-</Button>
                </Item>
            </List>
        )
    }
}

CountComponent.propTypes = {
    count:PropTypes.number.isRequired
}

export default CountComponent;
