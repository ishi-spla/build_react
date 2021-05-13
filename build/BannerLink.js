import React from 'react';
import img1 from '../../public/jpg_png/ラプラス.png'; //画像の大きさ注意
import img2 from '../../public/jpg_png/hoshikawa.jpg';
//import {Planet} from 'react-kawaii';
import {Browser} from 'react-kawaii';
//import {Ghost} from 'react-kawaii';

// console.log(img1)
const BannerLink =_=>{
    return(
    <a href="https://www.itmedia.co.jp/news/subtop/aiplus/" target="_blank" rel="noopener">
        <img src={img2} />
        <Browser size={110} mood="happy" color="#596881"/>
    </a>
    )
};

export default BannerLink;