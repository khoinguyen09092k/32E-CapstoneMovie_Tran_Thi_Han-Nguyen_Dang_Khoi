import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeMenu from './HomeMenu/HomeMenu'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { quanLyPhimAction } from '../../redux/actions/quanLyPhimAction'
import { quanLyRapAction } from '../../redux/actions/quanLyRapAction'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'

const Home = () => {
  const { arrFilm } = useSelector(state => state.quanLyPhimReducer)
  const dispath = useDispatch()
  const {heThongRapChieu} = useSelector(state => state.quanLyRapReducer)

  useEffect(() => {
    const action = quanLyPhimAction.layDanhSachPhimAction()
    dispath(action)
    dispath(quanLyRapAction.layDanhSachHeThongCumRapAcTion())
  }, [])

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" style={{backgroundImage: 'url(https://swall.teahub.io/photos/small/8-83155_purple-galaxy-wallpapers-hd-on-wallpaper-hd-1920.jpg)', backgroundPosition:'center', backgroundSize:'cover'}}>
          <div className="" style={{backgroudColor:'rgba(15,9,6,0.3)'}}>
          <MultipleRowSlick arrFilm={arrFilm} />

          </div>
        </div>
      </section>
      <div className='mx-36'>
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>

    </div>
  )
}

export default Home