import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call: ' + props.prop_value);
        return {tmp_state: props.prop_value};
    }
    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state: ' + this.state.tmp_state);
    }
    render() {
        console.log('3. render call');
        return (
            <h2>[RENDER FUNCTION]</h2>
        );
    }
}

export default R007_LifecycleEx;