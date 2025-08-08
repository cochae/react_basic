import React, { Component } from 'react';

class R006_LiftcycleEx extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call: ' + props.prop_value);
        return {};
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[RENDER FUNCTION]</h2>
        );
    }
}

export default R006_LiftcycleEx; 