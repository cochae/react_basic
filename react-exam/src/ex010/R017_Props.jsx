import React, { Component } from 'react';

class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val;
        prop_value += ' frm App.jsx';
        return (
            <div>{props_value}</div>
        );
    }
}

export default R017_Props;