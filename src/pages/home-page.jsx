import Header from "../components/header-component";
import Gallery from "../components/gallery-component";
import Footer from "../components/footer-component";


const HomePage = () => {
  return <div className="flex flex-col min-vh-100 justify-between">
    <Header/>
    <Gallery/>
    <Footer/>

  </div>
}

export default HomePage;