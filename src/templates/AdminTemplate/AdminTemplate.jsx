import React, { Fragment, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router'
import {
    FileOutlined,
    FundProjectionScreenOutlined,
    HomeOutlined,
    UploadOutlined,
    UserAddOutlined,
}
    from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './AdminTemplate.css'
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import _ from 'lodash'
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { useSelector } from 'react-redux';
import { history } from '../../App';

const { Header, Sider, Content } = Layout;


const AdminTemplate = (props) => {
    const { Component, ...restProps } = props
    const [collapsed, setCollapsed] = useState(false);
    const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer)
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert("Bạn không có quyền truy cập vào trang này !")
        return <Redirect to='/' />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert("Bạn không có quyền truy cập vào trang này !")
        return <Redirect to='/' />
    }

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
            history.push('/')
        }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0, 1)}</div>Xin chào! <span className='text-blue-500'>{userLogin.taiKhoan}</span></button> <button onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/home');
            window.location.reload();
        }} className="text-blue-800">Đăng xuất</button> </Fragment> : ''}
    </Fragment>


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<UserAddOutlined />}>
                            <NavLink to="/admin/users">Quản Lí Người Dùng</NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/films">Phim</NavLink>

                            </Menu.Item>
                            <Menu.Item key="11" icon={<UploadOutlined />}>
                                <NavLink to="/admin/films/addnew">Thêm Phim Mới</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<FundProjectionScreenOutlined />}>
                            <NavLink to="/admin/showtimes">Lịch Chiếu Phim</NavLink>
                        </Menu.Item>

                        <Menu.Item key="4" icon={<HomeOutlined />}>
                            <NavLink to="/home">Trở Về Trang Chủ</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <div className="text-right pr-10 pt-1">{operations}</div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}

export default AdminTemplate

