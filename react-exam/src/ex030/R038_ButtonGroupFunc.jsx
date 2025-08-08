import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const R038_ButtonGroupFunc = (props) => {
    const [number, setNumber] = useState(10);
    const move = (type) => {
    if(type === 'Left'){
      setNumber(number - 1)
    }else if(type === 'Right'){
      setNumber(number + 1)
    }else {
      setNumber(0);
    }
  }
    return (
    <div style={{padding: "0px"}}>
        <ButtonGroup style={{padding: "0px"}}>
          <Button onClick={e =>move('Left')}>decrease</Button>
          <Button onClick={e => move('Middle')}>reset</Button>
          <Button onClick={e => move('Right')}>increase</Button>
        </ButtonGroup>
        <br/>{number}
    </div>
    );
};

export default R038_ButtonGroupFunc;