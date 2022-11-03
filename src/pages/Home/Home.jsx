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

  useEffect(() => {
    const action = quanLyPhimAction.layDanhSachPhimAction()
    dispath(action)
    dispath(quanLyRapAction.layDanhSachHeThongCumRapAcTion())
  }, [])

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" style={{backgroundImage: 'url(https://media.baodautu.vn/Images/chicuong/2021/06/05/12.jpg)', backgroundPosition:'center', backgroundSize:'cover'}}>
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className='mx-36'>
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>

    </div>
  )
}

export default Home