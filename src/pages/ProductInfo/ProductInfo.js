import React from 'react';
import { Carousel } from 'antd';
import './ProductInfo.css';

let btnBox = {
    width: '80px',
    height: '30px',
    float: 'right',
    backgroundColor: '#d93131',
    marginLeft: '10px',
    lineHeight: '30px',
    fontSize: '10px',
    color: '#fff',
    textAlign: 'center'
};

const ProductInfo = () => (
    <div>
        <Carousel>
            <div className='picStyle'>
                pic1
            </div>
            <div className='picStyle'>
                pic2
            </div>
            <div className='picStyle'>
                pic3
            </div>
        </Carousel>
        <div style={{padding: '10px'}}>
            <h3 style={{color: 'red'}}>price</h3>
            <p>
                description
            </p>
            <div style={btnBox}>立即购买</div>
            <div style={btnBox}>加入购物车</div>
        </div>
    </div>
)

export default ProductInfo;