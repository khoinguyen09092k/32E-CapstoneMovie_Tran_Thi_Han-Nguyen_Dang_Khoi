import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/quanLyNguoiDungType";
import {history} from '../../App'

export const quanLyNguoiDungAction = {
    dangNhapAction: (thongTinDangNhap) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
                if (result.data.statusCode === 200) {
                    dispatch({
                        type: DANG_NHAP_ACTION,
                        thongTinDangNhap: result.data.content
                    });
                    history.goBack();
                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },
    layThongTinNguoiDungAction: () => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.layThongTinNguoiDung()
                if (result.data.statusCode === 200) {
                    dispatch({
                        type: SET_THONG_TIN_NGUOI_DUNG,
                        thongTinNguoiDung: result.data.content
                    });

                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },
}