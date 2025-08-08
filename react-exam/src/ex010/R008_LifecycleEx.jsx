import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
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
        this.setState({tmp_state2: true}); //상태 값이 바뀌면 shouldComponentUpdate가 실행 -> true면 render 재실행
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call, tmp_state2: ' + state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[RENDER FUNCTION]</h2>
        );
    }
}

export default R008_LifecycleEx;