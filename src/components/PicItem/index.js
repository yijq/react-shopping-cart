import React from 'react';

let picStyle={
    height: '200px',
    lineHeight: '200px',
    backgroundColor: '#f0f031',
    textAlign: 'center'
}

const PicItem = ({ id, carouselName, imgurl }) => (
    <div style={picStyle}>
        <p>{carouselName}</p>
        <p>{imgurl}</p>
    </div>
)

export default PicItem;