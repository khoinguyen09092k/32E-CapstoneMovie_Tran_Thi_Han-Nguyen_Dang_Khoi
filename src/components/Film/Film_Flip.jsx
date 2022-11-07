import React from 'react'
import './Film_Flip.css'
import { PlayCircleOutlined } from '@ant-design/icons'
import { history } from '../../App'
import { Button } from 'antd'

const Film_Flip = (props) => {

    const { item } = props

    return (
        <div  style={{padding:'25px'}}>
            <div className="flip-card ">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={item.hinhAnh} alt={item.tenPhim} style={{ width: '250px', height: '250px' }} />
                    </div>
                    <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0 }}>
                            <img src={item.hinhAnh} alt={item.tenPhim} style={{ width: '250px', height: '250px' }} />
                        </div>
                        <div className='w-full h-full' style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <div className='rounded-full cursor-pointer'><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                                <div className='text-2xl mt-2 font-bold'>{item.tenPhim}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Button className=' text-center cursor-pointer' style={{backgroundColor:'rgb(84,52,237)',outline:'hidden',width:'100%',}} type='primary' onClick={() => {
                        history.push(`/detail/${item.maPhim}`)
                    }}>
                        Đặt Vé Ngay
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default Film_Flip