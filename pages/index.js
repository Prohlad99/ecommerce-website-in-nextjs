import Layout from './../components/Layout/Layout';
import Arrival from './../components/arrivals/Arrival';
import Hero_Section from './../components/hero/Hero_Section';
import Meta from './../components/meta/Meta';
import Products from './../components/products/Products';
import Subscribe_Component from './../components/subscribe/Subscribe_Component';
import Testimonial_Carousel from './../components/testimonial/Testimonial_Carousel';
import Why_Shop from './../components/why_shop/Why_Shop';

const Home = () => {

  return (
    <div>
      <Meta title="Home Page"/>
      <Layout home={true}>
          <Hero_Section/>
          <Why_Shop/>
          <Arrival/>
          <Products/>
          <Subscribe_Component/>
          <Testimonial_Carousel/>
      </Layout>
    </div>
  )
}

export default Home
