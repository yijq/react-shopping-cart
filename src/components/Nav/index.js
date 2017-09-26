import React from 'react';
import { Row, Col, Icon } from 'antd';

export default class Nav extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={8} style={{textAlign:'center'}}><Icon type="mail" />  首页</Col>
          <Col span={8} style={{textAlign:'center'}}><Icon type="appstore" />  活动</Col>
          <Col span={8} style={{textAlign:'center'}}><Icon type="shopping-cart" />  商城</Col>
        </Row>
      </div>
    );
  }
}

