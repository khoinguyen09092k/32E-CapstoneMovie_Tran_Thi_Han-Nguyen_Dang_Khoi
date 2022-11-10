import { quanLyDangKyService } from "../../services/QuanLyDangKyService"
import { DANG_KY_ACTION, SET_THONG_TIN_DANG_KY } from "./types/quanLiDangKyType";
import {history} from '../../App'

export const quanLyDangKyAction = {
    dangKyAction: (thongTinDangKy) => {
        return async (dispatch) => {
            try {
                const result = await quanLyDangKyService.dangKy(thongTinDangKy)
               
                    dispatch({
                        type: DANG_KY_ACTION,
                        thongTinDangKy: result.data
                    });
              
                    history.goBack();
              
            } catch (errors) {
                const result = await quanLyDangKyService.dangKy(thongTinDangKy)

                if (result.data.statusCode === 400) {
                    dispatch({
                        type: DANG_KY_ACTION,
                        thongTinDangKy: result.data.message
                    });
            }
            }
        }
    },
    layThongTinDangKyAction: () => {
        return async (dispatch) => {
            try {
                const result = await quanLyDangKyService.layThongTinNguoiDung()
                    dispatch({
                        type: SET_THONG_TIN_DANG_KY,
                        thongTinNguoiDung: result.data
                    });
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },
}