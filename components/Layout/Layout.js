import Footer from "../footer/Footer";
import Home_page_footer from "../footer/Home_page_footer";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children, home=false }) => {
  const homePage = home;
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>

        <main className="h-auto">{children}</main>

        <footer>{homePage ? <Home_page_footer /> : <Footer />}</footer>
      </div>
    </>
  );
};

export default Layout;
