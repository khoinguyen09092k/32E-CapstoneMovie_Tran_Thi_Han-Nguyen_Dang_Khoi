import { Tabs } from 'antd';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { history } from '../../../App';


const { TabPane } = Tabs

const HomeMenu = (props) => {
    const { heThongRapChieu } = props
    console.log("heThongRapChieu: ", heThongRapChieu);

    const [tabPosition] = useState('left');

    const renderHeThongRap = () => {
        return heThongRapChieu?.map((heThongRap, index) => {
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '400px', display: 'flex', alignItems:'center' }} >
                                <img src={cumRap.hinhAnh} width={50} /> <br />
                                <div className="text-left ml-2">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-500">{cumRap.diaChi}</p>
                                </div>
                            </div>
                        }
                            key={index}>
                            {/*Load phim tương ứng */}
                            {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" >
                                        <div style={{ display: 'flex', alignItems:'center' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                            <div className="ml-2">
                                                <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                                                <div className="grid grid-cols-3 gap-6">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-lg text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}


                        </TabPane>

                    })}
                </Tabs>
            </TabPane>
        })
    }


    return (
        //dùng thư viện antdesign, gõ từ khóa 'tabs'
        <Tabs tabPosition={tabPosition} style={{background:'#000'}}>
            {renderHeThongRap()}
        </Tabs>
    )
}

export default HomeMenu