import axios from "axios";
import { DOMAIN } from "../../utils/setting/Config";
import { SET_CAROUSEL } from "../types/CarouselType";
import { qlPhimService } from "../../services/QuanLyPhimService";
export const getCarouselAction = async (dispatch)=>{
   
        // try{
  
        //     const result = await qlPhimService.layDanhSachBanner();
        //     dispatch({
        //       type:SET_CAROUSEL,
        //       arrImg:result.data.content
        //     })
        //   }catch(errors){
        //     console.log('errors', errors)
        //   }
    

        try {
          const result = await axios({
            url: `${DOMAIN}/api/QuanLyPhimService/layDanhSachBanner`,
            method:'GET',
          });
          dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content,
          })

          } catch(errors){
            console.log('errors',errors)
          }
} 