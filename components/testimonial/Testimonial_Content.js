import Image from "next/image";
const Testimonial_Content = (props) => {
  const { img, name, title, testimonial } = props.testimonials;
  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-[50%] m-auto">
        {/* image  */}
        <div>
          <Image
            className="rounded-full my-3"
            src={img}
            width={150}
            height={150}
            alt="customer"
          />
        </div>

        {/* content  */}
        <div className="text-center">
          <h1 className="my-2 text-xl font-bold">{name}</h1>
          <h3 className="my-2 text-gray-400">{title}</h3>
          <p>{testimonial}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial_Content;
