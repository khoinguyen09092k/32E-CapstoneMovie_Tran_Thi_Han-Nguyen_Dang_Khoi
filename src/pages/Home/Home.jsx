import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeMenu from './HomeMenu/HomeMenu'
import { quanLyPhimReducer } from '../../redux/reducers'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { quanLyPhimAction } from '../../redux/actions/quanLyPhimAction'
import { quanLyRapAction } from '../../redux/actions/quanLyRapAction'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'

const Home = () => {
  const { arrFilm } = useSelector(state => state.quanLyPhimReducer)
  const dispath = useDispatch()
  const {heThongRapChieu} = useSelector(state => state.quanLyRapReducer)
  // console.log("arrFilm: ", arrFilm);

  // const renderFilm = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />

  //   })
  // }
  useEffect(() => {
    const action = quanLyPhimAction.layDanhSachPhimAction()
    dispath(action) // dispatch function từ redux THUNK
    dispath(quanLyRapAction.layDanhSachHeThongCumRapAcTion())
  }, [])

  return (
    <div>
      <HomeCarousel />
    
      <section className="text-gray-600 body-font " style={{backgroundImage: 'url(https://wallpaperaccess.com/full/655045.jpg)', backgroundPosition:'center', backgroundSize:'200%',backgroundRepeat:'no-repeat'}}>
       
        <div className="container px-5 py-24 mx-auto " >
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap justify-center -m-4">
            {renderFilm()}
          </div> */}
        </div>
      </section>

      <div className='mx-36'>
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>

    </div>
  )
}

export default Home