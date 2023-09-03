import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import testimonials from "../../utilis/testimonial/testimonials";
import Testimonial_Content from "./Testimonial_Content";

const Testimonial_Carousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className="my-16">
                <div>
                    <div className="flex flex-col justify-center items-center mb-8 text-center">
                        <h1 className="md:text-[4vw] text-[30px] font-bold justify-self-center">
                            Customer's Testimonial
                        </h1>
                        <div className="h-[5px] w-[80px] bg-red-500"></div>
                    </div>
                </div>

                {/* slider  */}
                <div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id}>
                                <Testimonial_Content
                                    testimonials={testimonial}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* slider end  */}
            </div>
        </>
    );
};

export default Testimonial_Carousel;
