import { TOKEN, USER_REGISTER } from "../../util/settings/config"
import { DANG_KY_ACTION, SET_THONG_TIN_DANG_KY } from "../actions/types/quanLyDangKyType"

let user = {};
if(localStorage.getItem(USER_REGISTER)) {
    user = JSON.parse(localStorage.getItem(USER_REGISTER));
}

const stateDefault = {
    userRegister: user,
    thongTinNguoiDung: {},
}

export const quanLyDangKyReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_KY_ACTION : {
            const {thongTinDangKy} = action;
            localStorage.setItem(USER_REGISTER,JSON.stringify(thongTinDangKy));
            localStorage.setItem(TOKEN,thongTinDangKy.accessToken);
            return {...state,userRegister:thongTinDangKy}
        }

        case SET_THONG_TIN_DANG_KY: {
            state.thongTinNguoiDung = action.thongTinNguoiDung
            return {...state}
        }

        default: return { ...state }
    }
}