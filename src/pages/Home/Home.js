import React, { Component } from 'react';
// import MyCarousel from 'components/Carousel';
// import DisplayBox from 'components/DisplayBox';
// import Nav from 'components/Nav';
import MyFooter from 'components/Footer';
import './Home.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import $ from 'jquery';
//
// import { wxDataUrl,localDataUrl } from '../../url';

import ProductList from '../../containers/ProductList';
import CarouselContainer from '../../containers/CarouselContainer';

export default class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         "product1":{
    //             productName: "Name1",
    //             productDesc: "Desc"
    //         }
    //     }
    // }
   
    // componentDidMount() {
    //     let that = this;

    //     $.ajax({
    //         url: "http://"+wxDataUrl+"api/productInfo.json",
    //         success: function(res){
    //             console.log(res)
    //             that.setState(res)
    //         },
    //         error: function (){
    //             $.ajax({
    //                 url: "http://"+localDataUrl+"api/productInfo.json",
    //                 success: function(res){
    //                     console.log(res)
    //                     that.setState(res)
    //                 }
    //             })
    //         }
    //     })      
    // }

    render() {
        // let data = this.state;
        // let boxs = [];

        // for(var key in data) {
        //     boxs.push(<DisplayBox product={data[key]} key={key} />);
        // }
              
        return (
            <div className='homeDiv'>
                <Layout>
                    <Layout>
                    <Content>
                        {/* <MyCarousel /> */}
                        <CarouselContainer />
                        {/* {boxs} */ }
                        <ProductList />
                    </Content>
                    </Layout>
                    <Footer style={{textAlign: 'center'}}><MyFooter /></Footer>
                </Layout>
            </div>
        )
    }
}