import React from 'react'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { quanLyDangKyAction } from '../../redux/actions/quanLyDangKyAction';

const Register = () => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(2, "Tài khoản từ 2 đến 15 kí tự")
        .max(15, "Tài khoản từ 2 đến 15 kí tự")
        .required("Tài khoản không được bỏ trống!"),
      email: Yup.string()
        .email("Email ko đúng định dạng")
        .required("Email không được bỏ trống!"),
      matKhau: Yup.string()
        .min(8, "Mật khẩu ít nhất 8 kí tự")
        .required("Mật khẩu không được bỏ trống!"),
      soDt: Yup.string()
        .required("Số điện thoại không được bỏ trống!"),
    }),
    onSubmit: values => {
      dispatch(quanLyDangKyAction.dangKyAction(values))
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Đăng Ký Tài Khoản</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="taiKhoan"
              placeholder="Nhập tài khoản"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
            />

            {formik.errors.taiKhoan && formik.touched.taiKhoan && (
              <p className='text-red-500'>{formik.errors.taiKhoan}</p>
            )}

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="matKhau"
              placeholder="Mật Khẩu"
              value={formik.values.matKhau}
              onChange={formik.handleChange}

            />
            {formik.errors.matKhau && formik.touched.matKhau && (
              <p className='text-red-500'>{formik.errors.matKhau}</p>
            )}
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className='text-red-500'>{formik.errors.email}</p>
            )}
            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="soDt"
              placeholder="Nhập Số Điện Thoại"
              value={formik.values.soDt}
              onChange={formik.handleChange}

            />
            {formik.errors.soDt && formik.touched.soDt && (
              <p className='text-red-500'>{formik.errors.soDt}</p>
            )}
            <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" href="#">
              Đăng Ký
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              Nếu bạn đã có tài khoản.
              <br />
              <NavLink to="/login">
                Đăng nhập ngay !!!!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register