import { GROUPID } from "../util/settings/config";
import { api } from "../constants/api"

export const quanLyRapService = {
    LayDanhSachHeThongRap: () => {
        return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    },

    LayThongTinLichChieuPhim: (maPhim) => {
        return api.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    },
    
}