import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
 
    Switch,

} from 'antd';
import { useFormik } from 'formik';
import { values } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { quanLyPhimAction } from '../../../../redux/actions/quanLyPhimAction';
import { GROUPID } from '../../../../util/settings/config';

const AddNew = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
            maNhom: GROUPID
        },
        onSubmit: (values) => {
            console.log("values: ", values);
            values.maNhom = GROUPID
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            dispatch(quanLyPhimAction.themPhimUploadHinh(formData))
        }
    })

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    const handleChangeSwitch = (name) => {

        return (value) => {
            return formik.setFieldValue(name, value)
        }
    }

    const handleChangeInputNumber = (name) => {

        return (value) => {
            return formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                console.log(e.target.result);
                setImgSrc(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file)
        }
    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div className=''><Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <div className="" style={{ display: 'flex',justifyContent: 'space-around' }}>
                <div className="">
                    <h1 className='text-bold text-lg'>
                        Kích thước

                    </h1 >
                    <Form.Item name="size" >
                        <Radio.Group>
                            <Radio.Button value="small">Nhỏ</Radio.Button>
                            <Radio.Button value="default" >Mặc định</Radio.Button>
                            <Radio.Button value="large">Lớn</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Tên phim</h1 >
                    <Form.Item  >
                        <Input name='tenPhim' style={{ width: '250px' }} onChange={formik.handleChange} placeholder='Nhập tên phim' />
                    </Form.Item>
                    <h1 className='text-bold text-lg'>Trailer</h1 >
                    <Form.Item >
                        <Input name='trailer' style={{ width: '250px' }} onChange={formik.handleChange} placeholder='Trailer' />
                    </Form.Item>
                    <h1 className='text-bold text-lg'>Mô tả</h1 >
                    <Form.Item>
                        <Input name='moTa' style={{ width: '250px' }} onChange={formik.handleChange} placeholder='Mô tả' />
                    </Form.Item>
                    <h1 className='text-bold text-lg'>Ngày khởi chiếu</h1 >
                    <Form.Item >
                        <DatePicker name='ngayKhoiChieu'  style={{ width: '250px' }} placeholder='Chọn ngày' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
                    </Form.Item>

                </div>
                <div className="">
                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="">
                            <h1 className='text-bold text-lg'>Đang chiếu</h1 >
                            <Form.Item >
                                <Switch onChange={handleChangeSwitch('dangChieu')} />
                            </Form.Item>

                        </div>
                        <div className="" style={{ marginLeft: '20px' }}>
                            <h1 className='text-bold text-lg'>Sắp chiếu</h1 >
                            <Form.Item >
                                <Switch onChange={handleChangeSwitch('sapChieu')} />
                            </Form.Item>

                        </div>
                        <div className="" style={{ marginLeft: '20px' }}>
                            <h1 className='text-bold text-lg'>Hot</h1 >

                            <Form.Item >
                                <Switch onChange={handleChangeSwitch('hot')} />
                            </Form.Item>

                        </div>

                    </div>

                    <h1 className='text-bold text-lg'>Đánh giá</h1 >

                    <Form.Item >
                        <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10}  />
                    </Form.Item>
            <h1 className='text-bold text-lg'>Hình ảnh</h1>
            <Form.Item >
                <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                <br />
                <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
            </Form.Item>
                </div>

            </div>
            <Form.Item >
                <button type='submit' className='bg-blue-600 px-5 py-2 text-white' style={{borderRadius:'5px',marginLeft:'150px'}}>Thêm phim</button>
            </Form.Item>

        </Form>
        </div>
    )
}

export default AddNew