import Head from "next/head";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/shared/Hero";
import { ToastContainer } from "react-toastify";

const BaseLayout = ({ children, page = "" }) => {
  const isHomePage = () => page === "Home";

  return (
    <div className="portfolio-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {isHomePage() && <Hero />}
      <div className="container mb-5">{children}</div>
      {isHomePage() && (
        <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
          <div className="container text-center">
            <small>Copyright &copy; ComboDev Tech. All rights reserved</small>
          </div>
        </footer>
      )}
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
