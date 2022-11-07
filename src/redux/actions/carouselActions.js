import axios from "axios";
import {quanLyPhimService} from '../../services/quanLyPhimService'
import { SET_CAROUSEL } from "./types/carouselType";


export const carouselAction = {
    getCarouselAction: () => {
        return async (dispatch) => {
            try {
                const result = await quanLyPhimService.layDanhSachBanner()
                dispatch({
                    type: SET_CAROUSEL,
                    payload: result.data.content
                })

            } catch (errors) {
                console.log("errors: ", errors);
            }
        }
    }
}
