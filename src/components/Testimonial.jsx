import SectionHead from "./SectionHead"
import Card from "../UI/Card"
import { testimonials } from '../data'
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { useState } from "react"

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];
    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }
    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1)
        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }
    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
                <Card className="testimonial">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial__quote">{`"${quote}`}</p>
                    <h5 className="">{name}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn svg">
                        <IoIosArrowDropleftCircle onClick={prevTestimonialHandler} />
                    </button>
                    <button className="testimonials__btn svg">
                        <IoIosArrowDroprightCircle onClick={nextTestimonialHandler} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;