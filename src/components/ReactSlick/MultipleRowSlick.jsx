import React from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css'
import './MultipleRowSlick.css'
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/types/quanLyPhimType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}


const MultipleRowSlick = (props) => {

  const dispatch = useDispatch()

  const {dangChieu, sapChieu} = useSelector(state => state.quanLyPhimReducer)

  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film'

  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film'

  const renderFilms = () => {
    return props.arrFilm.slice(0,12).map((item, index) => {
      return <div key={index}>
        <Film_Flip item={item} />
      </div>
    })
  }

    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <button type="button" className={`px-4 py-3 font-semibold rounded ${activeClassDC}`} style={{backgroundColor:'rgb(280,197,70)', color:'black'}} onClick={() => {
          const action = {type: SET_PHIM_DANG_CHIEU}
          dispatch(action)
        }}>ĐANG CHIẾU</button>
        <button type="button" className={`relative px-4 py-3 ml-4 overflow-hidden font-semibold rounded ${activeClassSC}`} style={{color:'white',backgroundColor:'transparent',border:'1px solid'}} onClick={() => {
          const action = {type: SET_PHIM_SAP_CHIEU}
          dispatch(action)
        }}>SẮP CHIẾU
         
        </button>
        <Slider {...settings}>
          {renderFilms()}
        </Slider>
      </div>
    );
}

export default MultipleRowSlick