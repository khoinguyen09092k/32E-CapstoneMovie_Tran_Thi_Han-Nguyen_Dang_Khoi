import React,{useEffect} from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';

const HomeCarousel = (props) => {
    const {arrImg}= useSelector(state=>state.CarouselReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
      
      dispatch(getCarouselAction());
        
      },[])

      
    const contentStyle={
      height:'400px',
      color: '#fff',
      lineHeight:'160px',
      texAlign: 'center',
      backgroundPosition: 'center',
      backgroundSize:'100%',
      backgroundRepeat: 'no-repeat',

    };
    const renderImg =()=>{
      return arrImg.map((item,index)=>{
        return(
          <div className="" key={index} style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
            <img src={item.hinhAnh} className='w-full opcity-0 ' alt={item.hinhAnh} />
          </div>
        )
      })
    }
  return (
    <div>
      <Carousel autoplay >
        {renderImg()}


      </Carousel>
    </div>
  )
}

export default HomeCarousel