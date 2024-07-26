import Image from "next/image";
import Navbar from "./components/Navbar";
import Thumbnail from "./components/Thumbnail";
import Breadcrumbs from "./components/Breadcrumbs";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Hero from "./components/Hero_Section";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Hero/>
      {/* <Footer /> */}
    </main>
  );
}