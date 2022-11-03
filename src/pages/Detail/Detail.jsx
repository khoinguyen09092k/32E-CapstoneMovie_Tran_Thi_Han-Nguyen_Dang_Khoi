import React, { useEffect} from 'react'
import './Detail.css'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyRapAction } from '../../redux/actions/quanLyRapAction';
import moment from 'moment';
import { Rate } from 'antd';

import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

const Detail = (props) => {

  const { filmdetail } = useSelector(state => state.quanLyPhimReducer)
  console.log("filmdetail: ", filmdetail);

  const dispatch = useDispatch()

  useEffect(() => {
    let { id } = props.match.params
    dispatch(quanLyRapAction.layThongTinChiTietPhim(id))
  }, [])

  return (
    <div style={{ backgroundImage: `url(${filmdetail.hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='glassBackground' style={{ paddingTop: 160, minHeight: '100vh' }}>
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-3">
            <div className='grid grid-cols-2'>
              <div className='flex items-center'>
              <img style={{width:250}} src={filmdetail.hinhAnh} alt={filmdetail.tenPhim} />
              </div>
              <div className='flex items-center'>
                <div className='ml-3 text-white text-lg'>
                  <p className='text-2xl font-bold'>{filmdetail.tenPhim}</p>
                  <p>Ngày khởi chiếu: <span className='text-green-500'>{moment(filmdetail.ngayKhoiChieu).format('DD-MM-YYYY hh:mm A')}</span></p>
                  <p>Mô tả phim: <span className='text-green-500'>{filmdetail.moTa}</span></p>
                  <p>Đánh giá từ khán giả: <span className='text-green-500'>{filmdetail.danhGia}</span> </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4 flex items-center justify-center flex-col'>
            {/* Phần 'rating circle' */}
            <h1 className='text-2xl font-bold text-yellow-400 mr-8'>Rating</h1>
            <h1 className='text-2xl text-green-400 flex justify-center items-center mr-8'><Rate allowHalf value={filmdetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
            <div className={`c100 p${(filmdetail.danhGia) * 10} big`}>
              <span>{(filmdetail.danhGia) * 10}%</span>
            </div>
          </div>
        </div>
        <div className='mt-20 container flex justify-center'>
          <Tabs defaultActiveKey="1" centered >
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300, color:'#fff'}}>
              <div >
                <Tabs tabPosition={'left'} >
                  {filmdetail.heThongRapChieu?.map((hethongrap, index) => {
                    return <TabPane
                      tab={<div className="flex flex-row items-center justify-center">
                        <img src={hethongrap.logo} className="rounded-full w-full" style={{ width: 50 }}  />
                        <div className="text-center ml-2">
                          {hethongrap.tenHeThongRap}
                        </div>
                      </div>}
                      key={index}>
                      {hethongrap.cumRapChieu?.map((cumRap, index) => {
                        return <div className="mt-5" key={index}>
                          <div className="flex flex-row">
                            <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh}  />
                            <div className="ml-2">
                              <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                              <p className="text-white" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-4">
                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                              return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 font-bold text-green-500">
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                          </div>
                        </div>
                      })}
                    </TabPane>
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane className='text-lg' tab="Thông tin" key="2" style={{ minHeight: 300 }}>
              Thông tin
            </TabPane>
            <TabPane className='text-lg' tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Detail