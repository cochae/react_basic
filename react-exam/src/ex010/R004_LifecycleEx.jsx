import React, { Component } from 'react';

class R003_LifecycleEx extends Component {
    render() {
        console.log('3. render call')
        return (
            <h2>[RENDER FUNCTION]</h2>
        );
    }
}

export default R003_LifecycleEx;