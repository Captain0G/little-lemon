import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import Sidebar from "./Sidebar";
function HomePage({isBurger, setBurger}) {
  return (
    <>
      <Nav isBurger={isBurger} setBurger={setBurger} />

    <Main>
      <Header />
      <Specials />
      <CustomersSay />
      <Chicago />
    </Main>
      <Footer />
    
    
    </>
  );
}

export default HomePage;
