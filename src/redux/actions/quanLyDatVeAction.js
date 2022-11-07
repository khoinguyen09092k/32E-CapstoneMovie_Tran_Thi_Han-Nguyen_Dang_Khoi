import { connection } from "../..";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./loadingAction";
import { DISPLAY_LOADING, HIDE_LOADING } from "./types/loadingType";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/quanLyDatVeType";


export const quanLyDatVeAction = {
    layChiTietPhongVeAction: (maLichChieu) => {
        return async (dispatch) => {
            try {
                const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)
                if (result.status === 200) {
                    dispatch({
                        type: SET_CHI_TIET_PHONG_VE,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors);
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },

    datVeAction: (thongTinDatVe = new ThongTinDatVe()) => {

        return async (dispatch, getState) => {
            try {
                dispatch(displayLoadingAction)
                const result = await quanLyDatVeService.datVe(thongTinDatVe)
                await dispatch(quanLyDatVeAction.layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
                await dispatch({ type: DAT_VE_HOAN_TAT })
                await dispatch(hideLoadingAction)
                dispatch({ type: CHUYEN_TAB })

            } catch (errors) {
                console.log('errors: ', errors);
                console.log('errors: ', errors.reponse?.data);
            }
        }
        
    },
}
