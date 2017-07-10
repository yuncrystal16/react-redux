/**
 * Created by YUN on 27/6/17.
 */
import React from 'react';
import { NavBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <NavBar leftContent={<Link className='fontWhite' to='/'><i className="icon-home2"/></Link> }
                        mode="dark"
                        // onLeftClick={() => console.log('onLeftClick')}
                         rightContent={[
                             <Link className='fontWhite' key='1' to={this.props.rightLink}>{this.props.rightLinkContent}</Link>
                         ]}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
    rightLink:PropTypes.string.isRequired,
    rightLinkContent:PropTypes.string.isRequired
}


export default HeaderComponent;