import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DisplayBox extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Link to='productInfo'>    <div style={imgBox}></div> </Link>
                    <div style={contentBox}>
                        <div style={textBox}>
                            <h3>{this.props.product.productName}</h3>
                            <p>{this.props.product.productDesc}</p>
                        </div>
                        <div style={priceBox}>
                            <span>价格：￥{this.props.product.price} </span>
                            <span>库存：{this.props.product.inventry}件 </span>
                        </div>
                        <div style={btnBox}>
                            立即购买
                        </div>
                        <div style={btnBox} onClick={this.props.onAddToCart}>
                            加入购物车
                        </div>
                    </div>
            </div>
        )
    }
}

let divStyle = {
    margin: "10px",
    padding: '5px',
    height: '100px',
    // width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    // overflow: 'hidden',
}
let imgBox = {
    float: 'left',
    height: '100%',
    width: '80px',
    backgroundColor: '#ddd'
}
let contentBox = {
    flex: '1',
    padding: '5px'
}
let textBox = {
    float: 'left',
    width: '100%',
    height: '40px'
}
let btnBox = {
    width: '60px',
    height: '25px',
    float: 'right',
    backgroundColor: '#d93131',
    marginLeft: '10px',
    lineHeight: '25px',
    fontSize: '10px',
    color: '#fff',
    textAlign: 'center'
};
let priceBox = {
    // float: 'left',
}
