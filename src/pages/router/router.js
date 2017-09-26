import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router';

const MyRouter = React.createClass({
    render() {
      return (
        <div >
          <Row>
            <Col span={6} style={{textAlign:'center',height: '50px',lineHeight: '50px'}}><Icon type="appstore" />  <Link to='home'>首页</Link></Col>
            
            <Col span={6} style={{textAlign:'center',height: '50px',lineHeight: '50px'}}><Icon type="layout" /> <Link to='shop'> 分类</Link></Col>

            <Col span={6} style={{textAlign:'center',height: '50px',lineHeight: '50px'}}><Icon type="shopping-cart" /> <Link to='shoppingCart'> 购物车</Link></Col>

            <Col span={6} style={{textAlign:'center',height: '50px',lineHeight: '50px'}}> <Icon type="user" /><Link to=''>个人信息 </Link></Col>
          </Row>

        {this.props.children}
      </div>
      )
    }
  });

  export default MyRouter;