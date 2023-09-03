import Layout from "../../components/Layout/Layout"
import Meta from "../../components/meta/Meta"
import Why_Shop from "../../components/why_shop/Why_Shop"

const Home = () => {
  return (
    <div>
    <Meta title="Blog Page"/>
      <Layout>
        <Why_Shop/>
      </Layout>
    </div>
  )
}

export default Home
