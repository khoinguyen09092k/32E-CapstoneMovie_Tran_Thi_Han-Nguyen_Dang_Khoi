import React from 'react'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
    },
    onSubmit: values => {

      //const action = quanLyNguoiDungAction.dangNhapAction(values)
      // dispatch(action)

      console.log("values: ", values);
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
              onChange={formik.handleChange}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="matKhau"
              placeholder="Mật Khẩu"
              onChange={formik.handleChange}

            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}

            />

            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="soDt"
              placeholder="Nhập Số Điện Thoại"
              onChange={formik.handleChange}

            />

            <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" href="#">
              Đăng Ký
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service
              </a> and
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register