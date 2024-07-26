// components/Menu.js
const Menu = () => (
  <ul className="menu w-1/3 xl:pl-24 lg:pl-20 md:pl-20 sm:pl-10 max-sm:pl-10 xl:text-base md:text-base sm:text-xs max-sm:text-xs text-gray-500 xl:block md:block sm:block max-sm:hidden">
    <li className="menu-title font-semibold text-gray-800 mb-5 xl:text-lg md:text-base sm:text-xs max-sm:text-xs">
      Layanan Pelanggan Lotte Grosir
    </li>
    <li>
      <a href="#" className="bg-[#2583C5] rounded-md drop-shadow-md text-white">
        Promo
      </a>
    </li>
    <li>
      <a href="/Pengiriman">Pengiriman</a>
    </li>
    <li>
      <a href="Gratis_Ongkir.html">Gratis Ongkir</a>
    </li>
    <li>
      <a href="Garansi_Lotte.html">Garansi Lotte</a>
    </li>
    <li>
      <a href="Lacak_Pesanan.html">Lacak Pesanan</a>
    </li>
    <li>
      <a href="Kategori.html">Kategori Pilihan</a>
    </li>
    <li>
      <a href="Metode_Pembayaran.html">Metode Pembayaran</a>
    </li>
    <li>
      <a href="Bblm.html">Beli Banyak Lebih Murah</a>
    </li>
    <li>
      <a href="Pengembalian_Dana.html" className="mb-5">
        Pengembalian Barang & Dana
      </a>
    </li>
    <li className="menu-title font-semibold text-gray-800 mb-5 xl:text-lg md:text-base sm:text-xs max-sm:text-xs">
      Jelajahi Lotte
    </li>
    <li>
      <a href="Tentang_Kami.html">Tentang Kami</a>
    </li>
    <li>
      <a href="Hubungi_Kami.html">Hubungi Kami</a>
    </li>
    <li>
      <a href="Privasi.html">Kebijakan Privasi</a>
    </li>
    <li>
      <a href="Snk.html">Syarat & Ketentuan</a>
    </li>
  </ul>
);

export default Menu;
