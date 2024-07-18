import './Carrousel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import image1 from './imagem1.jpg'
import image2 from './imagem2.jpg'
import image3 from './imagem3.jpg'

function Carrousel(){
    return(
        <div className="carrousel">
            <Swiper 
                modules={{Autoplay}}
                autoplay={{
                    delay:5000
                }}
                slidesPerView={1}
                loop={true}
                >
                <SwiperSlide className='carrousel'>
                    <img src={image1} alt='imagem terelita'></img>
                </SwiperSlide>
                <SwiperSlide className='carrousel'>
                    <img src={image2} alt='imagem terelita'></img>
                </SwiperSlide>
                <SwiperSlide className='carrousel'>
                    <img src={image3} alt='imagem terelita'></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carrousel