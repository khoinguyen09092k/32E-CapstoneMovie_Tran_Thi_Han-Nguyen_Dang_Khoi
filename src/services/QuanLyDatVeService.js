
import { api } from "../constants/api"
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe"


export const quanLyDatVeService = {
    layChiTietPhongVe: (maLichChieu) => {
        return api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)

    },

    
    datVe: (thongTinDatVe = new ThongTinDatVe()) => {
        return api.post(`QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}
