
import { api } from "../constants/api"


export const quanLyNguoiDungService = {
    dangNhap: (thongTinDangNhap) => {
        return api.post(`QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    },

    layThongTinNguoiDung: () => {
        return api.post(`QuanLyNguoiDung/ThongTinTaiKhoan`)
    },

}
