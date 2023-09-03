import Layout from "../../components/Layout/Layout";
import Check_Out_Form from "../../components/checkout/Check_Out_Form";
import Payment from "../../components/checkout/payment/Payment";

const index = () => {
  return (
    <div>
      <Layout>
        {/* container  */}
        <div className="grid grid-cols-12 justify-center my-10 p-5 items-center">
          <div className="col-span-7 w-full">
            <Check_Out_Form />
          </div>
          <div className="col-span-5">
            <Payment />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default index
