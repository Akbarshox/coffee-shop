import React from 'react';
import Wrapper from "../Wrapper";
import {Grid} from "@material-ui/core";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {NewsData} from "./NewsData";
import {NewsDataMobile} from "./NewsDataMobile";
import style from './news.module.css';

export default function News() {
   return (
      <Wrapper>
         <div className={style.main}>
            <p>Новости и акции</p>
            <div className={style.comp}>
               <Carousel autoPlay showArrows={false} showIndicators={false} showStatus={false}
                         showThumbs={false} infiniteLoop={true} transitionTime={500} interval={5000} swipeable={true}
                         emulateTouch={true} renderItem={item => <div style={{background: "white"}}>{item}</div>}>
                  {NewsData.map((el, i) =>
                     <Grid container spacing={3} key={i} className={style.carousel}>
                        <Grid item xs={12} sm={4}>
                           <a href=""><img src={el.img1} alt=""/></a>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <a href=""><img src={el.img2} alt=""/></a>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                           <a href=""><img src={el.img3} alt=""/></a>
                        </Grid>
                     </Grid>
                  )}
               </Carousel>
            </div>
            <div className={style.mobile}>
               <Carousel autoPlay showArrows={false} showIndicators={false} showStatus={false}
                         showThumbs={false} infiniteLoop={true} transitionTime={500} interval={5000} swipeable={true}
                         emulateTouch={true}>
                  {NewsDataMobile.map((el, i) =>
                     <Grid container spacing={3} key={i} className={style.carousel}>
                        <Grid item xs={12} md={4}>
                           <a href=""><img src={el.img} alt="img"/></a>
                        </Grid>
                     </Grid>
                  )}
               </Carousel>
            </div>
         </div>
      </Wrapper>
   )
}