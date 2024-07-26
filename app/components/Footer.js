// components/Footer.js
const Footer = () => (
  <footer className="footer xl:text-base md:text-base sm:text-xs max-sm:text-xs justify-between bg-white text-gray-500 gap-10 xl:px-24 lg:px-20 md:px-20 sm:px-10 max-sm:px-10 pt-20 pb-10">
    <nav>
      <h6 className="footer-title text-gray-800">Layanan Pelanggan</h6>
      <a href="#" className="link link-hover ">
        Promo
      </a>
      <a href="Pengiriman.html" className="link link-hover">
        Pengiriman
      </a>
      <a href="Gratis_Ongkir.html" className="link link-hover">
        Gratis Ongkir
      </a>
      <a href="Garansi_Lotte.html" className="link link-hover">
        Garansi Lotte
      </a>
      <a href="Lacak_Pesanan.html" className="link link-hover">
        Lacak Pesanan
      </a>
      <a href="Kategori.html" className="link link-hover">
        Kategori Pilihan
      </a>
      <a href="Metode_Pembayaran.html" className="link link-hover">
        Metode Pembayaran
      </a>
      <a href="Bblm.html" className="link link-hover">
        Beli Banyak Lebih Murah
      </a>
      <a href="Pengembalian_Dana.html" className="link link-hover">
        Pengembalian Barang & Dana
      </a>
    </nav>
    <nav>
      <h6 className="footer-title text-gray-800">Jelajahi Lotte</h6>
      <a
        href="https://lottemart.co.id/lotte-mart#marketplaceBlock"
        className="link link-hover"
      >
        Marketplace
      </a>
      <a href="Tentang_Kami.html" className="link link-hover">
        Tentang Kami
      </a>
      <a href="Hubungi_Kami.html" className="link link-hover">
        Hubungi Kami
      </a>
      <a
        href="https://lottemartmall.co.id/"
        target="_blank"
        className="link link-hover"
      >
        Lotte Mart Mall
      </a>
      <a href="Privasi.html" className="link link-hover">
        Kebijakan Privasi
      </a>
      <a href="Snk.html" className="link link-hover">
        Syarat & Ketentuan
      </a>
    </nav>
    <nav>
      <h6 className="footer-title text-gray-800">Ikuti Kami</h6>
      <a
        href="https://www.tiktok.com/@lottegrosirindonesia"
        target="_blank"
        className="link link-hover"
      >
        Tik-Tok
      </a>
      <a
        href="https://www.youtube.com/@LotteGrosirIndonesia"
        target="_blank"
        className="link link-hover"
      >
        Youtube
      </a>
      <a
        href="https://www.facebook.com/lottegrosir"
        target="_blank"
        className="link link-hover"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/lottegrosir/"
        target="_blank"
        className="link link-hover"
      >
        Instagram
      </a>
    </nav>
    <nav>
      <a href="https://order.lottemart.co.id" target="_blank">
        <img
          className="img"
          src="/image-footer.png"
          alt="Order Lotte Mart Online"
        />
      </a>
    </nav>
  </footer>
);

export default Footer;