import Categories from "./components/Categories";
import Ebooksecion from "./components/Ebooksecion";
import FeaturedBook from "./components/FeaturedBook";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewLetter";
import NewRelease from "./components/NewRelease";
import Salesection from "./components/Salesection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <Ebooksecion />
      <NewRelease />
      <FeaturedBook />
      <Salesection />
      <NewsLetter />
      <Footer/>
    </>
  );
}
