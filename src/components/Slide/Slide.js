import './Slide.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import lavoura from './3.png'
import cafe from './2.png'
import familiaFoto from './1.png'

function Slide(){
    return(
        <div class="slider">
            <Swiper 
                modules={{Autoplay}}
                autoplay={{
                    delay:3500
                }}
                slidesPerView={1}
                loop={true}
                >
                <SwiperSlide className='carrousel'>
                    <img src={familiaFoto} alt='imagem terelita'></img>
                </SwiperSlide>
                <SwiperSlide className='carrousel'>
                    <img src={cafe} alt='imagem terelita'></img>
                </SwiperSlide>
                <SwiperSlide className='carrousel'>
                    <img src={lavoura} alt='imagem terelita'></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide