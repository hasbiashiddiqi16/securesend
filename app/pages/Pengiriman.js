import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Thumbnail from "./components/Thumbnail";
import Breadcrumbs from "./components/Breadcrumbs";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function Pengiriman() {
  return (
    <main className="flex  flex-col justify-between bg-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <Thumbnail />
      </div>
      <div className="body xl:pt-[180px] lg:pt-[180px] md:pt-[180px] sm:pt-[180px] max-sm:pt-[150px] xl:pl-24 lg:pl-20 md:pl-20 sm:pl-10 max-sm:pl-10">
        <Breadcrumbs />
      </div>
      <div className="xl:hidden md:hidden sm:hidden xl:px-24 lg:px-20 md:px-20 sm:px-10 max-sm:px-10">
        <Modal />
      </div>
      <div className="flex">
        <Menu />
        <article className="prose text-gray-800 w-fit py-4 pl-9 xl:pr-24 lg:pr-20 md:pr-20 sm:pr-10 max-sm:pr-10 xl:text-base md:text-base sm:text-xs max-sm:text-xs">
          <h1 class="font-bold mb-5">PENGIRIMAN</h1>
          <h2 class="font-semibold text-lg xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl">
            Online Order Microsite
          </h2>
          <p>
            <br />
            Selamat datang di layanan jasa pengiriman LOTTE, solusi terpercaya
            untuk kebutuhan pengiriman barang Anda. Dengan LOTTE, Anda dapat
            mengirimkan barang dengan cepat, aman, dan mudah ke tujuan Anda.
            <br />
          </p>
          <p>
            <br />
            Keunggulan Jasa Pengiriman LOTTE:
          </p>
          <ul class="list-disc">
            <li>
              Kecepatan: Kami memahami betapa pentingnya waktu Anda. Dengan
              LOTTE, Anda dapat mengirimkan barang dalam waktu singkat sehingga
              dapat dipastikan barang Anda tiba tepat waktu.
            </li>
            <li>
              Cakupan Luas: Layanan jasa pengiriman LOTTE tersedia di berbagai
              wilayah, baik di perkotaan maupun pedesaan. Apapun lokasi tujuan
              Anda, kami siap mengantarkan barang Anda dengan cepat dan aman.
            </li>
            <li>
              Fleksibilitas Waktu: Anda dapat memilih waktu pengiriman yang
              sesuai dengan kebutuhan Anda. Kami menyediakan layanan jasa
              pengiriman sesuai jam operasional toko untuk memastikan kenyamanan
              Anda.
            </li>
            <li>
              Dukungan Pelanggan: Tim dukungan pelanggan kami siap membantu Anda
              setiap saat. Jika Anda memiliki pertanyaan atau membutuhkan
              bantuan, jangan ragu untuk menghubungi kami.
            </li>
          </ul>
          <p>
            <br />
            Pilihan Pengiriman:
          </p>
          <ul class="list-disc">
            <li>Jasa Pengiriman Lotte.</li>
            <li>Grab Express.</li>
          </ul>
          <p>
            <br />
            Syarat dan Ketentuan Jasa Pengiriman Lotte:
          </p>
          <ul class="list-disc">
            <li>Min. pembelian 1.5Mio dengan jarak max. 10Km.</li>
            <li>Sudah selesai melakukan payment.</li>
          </ul>
          <p>
            <br />
            Syarat dan Ketentuan Grab Express:
          </p>
          <ul class="list-disc">
            <li>Max.Pembelian Rp 1.5Mio.</li>
            <li>Pengiriman instant motor max. berat 7kg.</li>
            <li>Pengiriman sameday motor max. 15kg.</li>
            <li>Pengiriman Ekspres mobil max. 100kg.</li>
            <li>Sudah selesai melalukan payment.</li>
            <li>Grab Express Same Day - Motor 09.00 - 15.00</li>
            <li>Grab Express Instant - Motor 08.00 - 18.00.</li>
            <li>Grab Express - Mobil 08.00 - 18.00.</li>
          </ul>
          <p>
            <br />
            Proses Pengiriman:
          </p>
          <ul class="list-disc">
            <li>
              Pesan Layanan: Pesan layanan jasa pengiriman LOTTE atau Grab
              Express melalui Online Order Microsite saat checkout. Pilih jenis
              layanan yang sesuai dengan kebutuhan pengiriman Anda.
            </li>
            <li>
              Kelanjutan : Anda akan dihubungi toko tempat Anda belanja
              secepatnya setelah memilih jasa pengiriman LOTTE. Sehingga
              estimasi harga pengiriman Anda akan diinformasikan oleh toko.
            </li>
            <li>
              Lacak Pengiriman Grab Express: Lacak status pengiriman barang Anda
              secara real-time melalui link dari sistem Online Order Microsite
              ke nomor whatsapp atau pada halaman akun. Anda dapat memantau
              perjalanan barang Anda dari pengambilan hingga pengiriman.
            </li>
            <li>
              Terima Barang: Terima barang Anda dengan aman dan nyaman di tujuan
              yang Anda tentukan. Pastikan untuk melakukan pengecekan barang
              setelah tiba untuk memastikan keamanan dan kualitasnya.
            </li>
          </ul>
          <p>
            <br />
            Tarif dan Biaya:
            <br />
            Tarif pengiriman dengan LOTTE dapat bervariasi tergantung pada
            jarak, ukuran barang, dan jenis layanan yang Anda pilih. Untuk
            informasi lebih lanjut tentang tarif dan biaya, silakan kunjungi
            situs web kami atau hubungi layanan pelanggan kami.
          </p>
          <p>
            <br />
            Keamanan dan Perlindungan:
            <br />
            Kami mengutamakan keamanan barang Anda selama proses pengiriman.
            Setiap pengiriman dilengkapi dengan perlindungan asuransi untuk
            Memastikan bahwa product terjamin kualitas sampai kepada anda.
          </p>
          <p>
            <br />
            Panduan Penggunaan:
            <br />
            Temukan tips dan panduan berguna tentang cara menggunakan layanan
            pengiriman LOTTE dengan efisien dan efektif di blog kami.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}