
import { api } from "../constants/api"


export const quanLyDangKyService = {
    dangKy: (thongTinDangKy) => {
        return api.post(`QuanLyNguoiDung/DangKy`, thongTinDangKy)
    },

    layThongTinNguoiDung: () => {
        return api.post(`QuanLyNguoiDung/ThongTinTaiKhoan`)
    },

}
