import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap'
import mac01 from '/tigers1.jpg';
import mac02 from '/tigers2.jpg';
import mac03 from '/tigers3.jpg';

const items = [
    {
        src: mac01,
        altText: '슬라이드1 이미지 대체 문구',
        caption: '크리미 어니언',
        header: '크리미 어니언',
    },
    {
        src: mac02,
        altText: '슬라이드2 이미지 대체 문구',
        caption: '페퍼로니 메가',
        header: '페퍼로니 메가',
    },
    {
        src: mac03,
        altText: '슬라이드3 이미지 대체 문구',
        caption: '미트칠리',
        header: '미트칠리',
    },

]
class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        );
    }
}

export default R041_ReactstrapCarousel;