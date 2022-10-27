import React from 'react'
import {baseServicers} from './baseServicers'
 export class QuanLyPhimService extends baseServicers {
  
    constructor (){
      super();
    }
  
  layDanhSachBanner =()=>{
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
  }
}

export const qlPhimService = new QuanLyPhimService()