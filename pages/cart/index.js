import Layout from "../../components/Layout/Layout";
import Cart_Item from "../../components/cart/Cart_Item";
import Grand_Total from "../../components/cart/Grand_Total";

const index = () => {
  return (
    <div>
      <Layout>
        {/* container */}
        <div className="grid grid-cols-12 justify-center items-center my-8 p-5 h-[500px] ">
          <div className="col-span-7 h-[490px] overflow-scroll">
            <Cart_Item />
            <Cart_Item />
            <Cart_Item />
            <Cart_Item />
          </div>
          <div className="col-span-5">
            <Grand_Total />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default index
