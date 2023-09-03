import Layout from "../../components/Layout/Layout"
import Meta from "../../components/meta/Meta"
import Products from "../../components/products/Products"

const Home = () => {
  return (
    <div>
        <Meta title="Products Page"/>
      <Layout>
        <Products/>
      </Layout>
    </div>
  )
}

export default Home
