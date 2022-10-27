import React, { useState } from 'react'
import { Radio, Space, Tabs } from 'antd';
const {TabPane} =Tabs
const HomeMenu = (props) => {
    const [state,setState] = useState({
        tabPosition: 'left',
    })
    const changeTabPosition = (e) => {
        this.setState({tabPosition: e.target.value});
      };
    const{tabPosition} = state
  return (
    <>
      {/* <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space> */}
      {/* <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      /> */}
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img src="http://picsum.photo/200" className='rounded-full' width='50' alt='#'/>} key="1">
                  1
                </TabPane>
                <TabPane tab={<img src="http://picsum.photo/200" className='rounded-full' width='50' alt='#'/>} key="2">
                  1
                </TabPane>
                <TabPane tab={<img src="http://picsum.photo/200" className='rounded-full' width='50' alt='#'/>} key="3">
                  1
                </TabPane>
              

            </Tabs>
        </>
    )
}

export default HomeMenu