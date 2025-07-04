
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Dealer from "./components/dealer/Dealer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Modal from "./components/modal/Modal";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main_content_area">
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Modal />
        <Dealer />
      </main>
      <Footer />
    </>
  );
}

export default App;
