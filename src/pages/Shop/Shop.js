import React,{ Component } from 'react';
import DisplayBox from 'components/DisplayBox';
import MyFooter from 'components/Footer'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './Shop.css';

const product = {
    "carouselName":"carousel1",
    "carouselDesc":"this is carousel1 description from ajax"
};

export default class Shop extends Component {
    render() {
        return (
            <Layout>
                <Layout>
                    <Sider width={80} style={{backgroundColor:'#f9f931',position:'fixed',height:'100%'}}>
                        <a className='sideBox' href="#option1">option1</a>
                        <a className='sideBox' href="#option2">option2</a>
                        <a className='sideBox' href="#option3">option3</a>
                        <a className='sideBox' href="#option4">option4</a>
                        <a className='sideBox' href="#option5">option5</a>
                        <a className='sideBox' href="#option6">option6</a>
                        <a className='sideBox' href="#option7">option7</a>
                    </Sider>
                    <Content style={{paddingLeft:'80px',trantision:'top .5s'}}>
                        <div id='option1'>
                            <h3>option1</h3>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option2'>
                            <h3>option2</h3>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option3'>
                            <h3>option3</h3>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option4'>
                            <h3>option4</h3>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option5'>
                            <h3>option5</h3> 
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option6'>
                            <h3>option6</h3> 
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                        <div id='option7'>
                            <h3>option7</h3> 
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                            <DisplayBox product={product}/>
                        </div>
                    </Content>
                </Layout>
                <Footer style={{textAlign:'center'}}><MyFooter /></Footer>
            </Layout>
        )
    }
}