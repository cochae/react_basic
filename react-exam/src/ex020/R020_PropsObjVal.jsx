import React, { Component } from 'react';

class R020_PropsObjVal extends Component {
    render() {
        let { ObjectJson } = this.props; // 객체 분해?
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        );
    }
}

export default R020_PropsObjVal;