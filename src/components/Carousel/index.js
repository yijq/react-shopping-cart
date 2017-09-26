import React,{ Component } from 'react';
import { Carousel } from 'antd';
import './Carousel.css';
import $ from 'jquery';
import { localDataUrl, wxDataUrl } from '../../url';

 
export default class MyCarousel extends Component {
    constructor() {
        super();
        this.state={
            "carousel1":{
                "carouselName":"carousel1",
                "carouselDesc":"this is carousel1 description from ajax"
            },
        };
    }

    onChange(a) {
        // console.log(a);
    }
    _handleClick (e) {
         console.log(e.target.value)
    }
    componentDidMount() {
        let that = this;
        $.ajax({
            url: "http://"+wxDataUrl+"api/carouselInfo.json",
            success: function(res){
                console.log(res)
                that.setState(res)
            },
            error: function (){
                $.ajax({
                    url: "http://"+localDataUrl+"api/carouselInfo.json",
                    success: function(res){
                        console.log(res)
                        that.setState(res)
                    }
                })
            }
        })
    }
    render() {
        let picStyle={
            height: '200px',
            lineHeight: '200px',
            backgroundColor: '#f0f031',
            textAlign: 'center'
        }
        let pics = [];
        let picData = this.state;
        for(var key in picData){
            pics.push(<div style={picStyle} key={key}>{picData[key].carouselName}</div>)
        }

        return (
            <Carousel afterChange={this.onChange} autoplay style={{overflow: 'hidden'}}>
                {pics} 
            </Carousel>
        )
    }
}