import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const R043_FadeIn = (props) => {
    const [fadeInOut, setFadeInOut] = useState(true);
    const toggle = () => setFadeInOut(!fadeInOut);

    return(
        <div>
            <Button color="success" onClick={toggle}> Fade In/Out </Button>
            <Fade in={fadeInOut} tag="h1">
                여기가 Fade In/Out 되는 영역입니다.
            </Fade>
        </div>
    );
};

export default R043_FadeIn;