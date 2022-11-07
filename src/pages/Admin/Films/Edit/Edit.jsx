import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quanLyPhimAction } from '../../../../redux/actions/quanLyPhimAction';
import { GROUPID } from '../../../../util/settings/config';

const Edit = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    const dispatch = useDispatch()
    const { thongTinPhimEdit } = useSelector(state => state.quanLyPhimReducer)
    console.log("thongTinPhimEdit: ", thongTinPhimEdit);

    useEffect(() => {
        const action = quanLyPhimAction.layThongTinPhimEditAction(props.match.params.id)
        dispatch(action)
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhimEdit.maPhim,
            tenPhim: thongTinPhimEdit.tenPhim,
            trailer: thongTinPhimEdit.trailer,
            moTa: thongTinPhimEdit.moTa,
            dangChieu: thongTinPhimEdit.dangChieu,
            sapChieu: thongTinPhimEdit.sapChieu,
            hot: thongTinPhimEdit.hot,
            danhGia: thongTinPhimEdit.danhGia,
            ngayKhoiChieu: thongTinPhimEdit.ngayKhoiChieu,
            hinhAnh: null,
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
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);

                    }
                }
            }
            dispatch(quanLyPhimAction.capNhatPhimUploadAction(formData))
        }
    })

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value)
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

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            await formik.setFieldValue('hinhAnh', file);
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            }

        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div><Form
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
            <div className="" style={{display: 'flex',justifyContent: 'space-around' }}>
                <div className="">

                    <h1  className='text-bold text-lg'>Kích thước</h1>
                    <Form.Item  name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Nhỏ</Radio.Button>
                            <Radio.Button value="default">Mặc định</Radio.Button>
                            <Radio.Button value="large">Lớn</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Tên phim</h1 >
                    <Form.Item >
                        <Input name='tenPhim' style={{ width: '250px' }}  onChange={formik.handleChange} value={formik.values.tenPhim} />
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Trailer</h1 >
                    <Form.Item >
                        <Input name='trailer' style={{ width: '250px' }}  onChange={formik.handleChange} value={formik.values.trailer} />
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Mô tả</h1 >
                    <Form.Item >
                        <Input name='moTa' style={{ width: '250px' }}  onChange={formik.handleChange} value={formik.values.moTa} />
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Ngày khởi chiếu</h1 >
                    <Form.Item >
                        <DatePicker onChange={handleChangeDatePicker} style={{ width: '250px' }}  format='DD/MM/YYYY' value={moment(formik.values.ngayKhoiChieu)} />
                    </Form.Item>

                </div>
                <div className="">
                    <div className="" style={{display: 'flex',justifyContent: 'space-around' }}>
                        <div className="">
                    <h1  className='text-bold text-lg'>Đang chiếu</h1 >
                    <Form.Item >
                        <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                    </Form.Item>

                        </div>
                        <div className="">
                    <h1  className='text-bold text-lg'>Sắp chiếu</h1 >
                    <Form.Item label="">
                        <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                    </Form.Item>

                        </div>
                        <div className="">
                <h1  className='text-bold text-lg'>Hot</h1 >
                    <Form.Item >
                        <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                    </Form.Item>

                        </div>

                    </div>
                    <h1  className='text-bold text-lg'>Đánh giá</h1 >

                    <Form.Item >
                        <InputNumber onChange={handleChangeInputNumber('danhGia')} style={{ width: '250px' }}  min={1} max={10} value={formik.values.danhGia} />
                    </Form.Item>
                    <h1  className='text-bold text-lg'>Hình ảnh</h1 >
                    <Form.Item >
                        <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                        <br />
                        <img style={{ width: 150, height: 150 }} src={imgSrc === '' ? thongTinPhimEdit.hinhAnh : imgSrc} />
                    </Form.Item>

                </div>

            </div>


            <Form.Item >
                <button type='submit' className='bg-blue-500 p-2 text-white' style={{borderRadius:'5px',marginLeft:'150px'}}>Cập nhật</button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Edit