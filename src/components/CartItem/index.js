import React from 'react';
import { Radio,InputNumber } from 'antd';
import './CartItem.css'

export default class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='radio-box'>
                <Radio></Radio>
                </div>
                <div className='img-box'></div>
                <div className='info-box'>
                    <div className='desc-box'>
                        <h3>{this.props.product.productName}</h3>
                        <p>{this.props.product.productDesc}</p>
                    </div>
                    <div className='price-box'>
                        <span style={{float: 'left',fontSize:'15px',fontWeight:'700',color:'red'}}>{this.props.product.price}</span>
                        <div style={{float: 'right'}}>数量: <InputNumber /></div>
                    </div>
                </div>
            </div>
        )
    }
}

