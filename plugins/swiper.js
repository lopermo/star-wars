import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
SwiperClass.use([Pagination, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
