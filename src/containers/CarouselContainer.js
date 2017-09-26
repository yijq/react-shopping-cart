import React from 'react';
import { Carousel } from 'antd';
import PicItem from 'components/PicItem';
import { connect } from 'react-redux';

const CarouselContainer = ({ carouselPics }) => {
    console.dir(carouselPics)
    let pics = carouselPics.map((v,i)=>(<div key={v.id}><PicItem 
        id={v.id}
        carouselName={v.carouselName}
        imgurl={v.imgurl}
        key={v.id}
    /></div>));
    console.dir(pics)
    return (
        <Carousel autoplay style={{overflow: 'hidden',height:'200px'}}>
            {/* <div style={{height: '200px'}}>1</div>
            <div style={{height: '200px'}}>2</div>  */}
            {pics}
        </Carousel>
    )
}

const mapStateToprops = (state)=> {
    return {
        carouselPics: state.carousel
    }
}

export default connect(mapStateToprops)(CarouselContainer);