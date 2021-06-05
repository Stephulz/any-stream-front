import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './Slider.css'

const Slider = ({ slides, time }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), time);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide} alt="slide content" key={index} className="image"></img>)}

                        {/* <ReactPlayer
                    url={`${REACT_APP_API_URL}/stream/all`}
                    muted={true}
                    playing={true}
                    config={{
                        file: {
                            forceHLS: true
                        }
                    }}
                    controls={true}
                    width={500}
                    height={375}
                /> */}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider

