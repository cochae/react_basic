import React, { Component } from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAlert extends Component {
    render() {
        return (
            <div>
                <Alert color="info">
                    Simple Alert [color : info]
                </Alert>
                <UncontrolledAlert color="dark">
                    Uncontrolled Alert [color : dark]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default R034_ReactstrapAlert;