import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Sale_Off from "./Sale_Off";

const Carousel = () => {
	const carousel_contents = [
		{
			name: "Sale Off",
			value: <Sale_Off />,
		},
		{
			name: "Sale Off",
			value: <Sale_Off />,
		},
		{
			name: "Sale Off",
			value: <Sale_Off />,
		},
	];

	let settings = {
        
        infinite: true,
        slidesToScroll: 1,
        slidesToShow:1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:false,
        
        
	};

	return (
		<>
			<Slider {...settings}>
				{carousel_contents.map((content) => (
					<div key={content.name}>{content.value}</div>
				))}

        
			</Slider>
		</>
	);
};

export default Carousel;
