import Header from "../components/header-component";
import Gallery from "../components/gallery-component";
import Footer from "../components/footer-component";


const HomePage = () => {
  const bgColor = "#000000"
  const white = "#FFFFFF"

  return <div className="flex flex-col min-vh-100 justify-between">
    <Header/>
    <Gallery/>
    <Footer bgColor={bgColor} textColor={white} iconColor={white} bgColorFooter={white}/>

  </div>
}

export default HomePage;