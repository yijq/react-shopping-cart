import React from 'react';
import './Checkout.css';
import { Radio } from 'antd';

const Checkout = () => (
    <div className='checkout-box'>
        <div className='radio-box'>
            <Radio className='my-radio'>全选</Radio>
        </div>
        <div className='total'>合计:<span>total price</span></div>
        <div className='checkout-button'>结算(<span>sum</span>)</div>
    </div>
)

export default Checkout;