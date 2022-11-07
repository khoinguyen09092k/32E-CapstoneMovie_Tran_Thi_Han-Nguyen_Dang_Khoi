
import { Alert, Spin,Space } from 'antd'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const antIcon = (
 
    <Space size="middle">
           <Alert
    message="Loading"
  />
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
   
  </Space>
)
export default function Loading(props) {

    const { isLoading } = useSelector(state => state.loadingReducer)
  

    return (
        <Fragment>
            {isLoading ? <div style={{ position: 'fixed', top: 0, left: -70, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,2)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                <Spin indicator={antIcon} />
            </div> : ''}
        </Fragment>
    )

}
