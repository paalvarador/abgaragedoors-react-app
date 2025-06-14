import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import "./App.css";
import Dealer from "./components/dealer/Dealer";

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
