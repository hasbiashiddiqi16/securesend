'use client'

import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="h-auto pt-3">
      <button
        className="btn bg-[#2583C5] border-0 text-white drop-shadow-md tracking-wide w-[100%]"
        onClick={openModal}
      >
        Navigasi
      </button>
      {showModal && (
        <div
          id="my_modal_1"
          className="modal xl:px-24 lg:px-20 md:px-20 sm:px-3 max-sm:px-3"
          open
          onClick={closeModal}
        >
          <div className="modal-box bg-white text-gray-500 h-[60%] text-base">
            <h3 className="text-lg font-bold py-4">Layanan Pelanggan Lotte</h3>
            <div className=" bg-[#2583C5] w-[100%] h-[auto] rounded-md drop-shadow-md">
              <a href="#" className="text-white">
                <p className="py-4 pl-5">Promo</p>
              </a>
            </div>
            <div>
              <a href="Pengiriman.html">
                <p className="py-4 pl-5">Pengiriman</p>
              </a>
            </div>
            <div>
              <a href="Gratis_Ongkir.html">
                <p className="py-4 pl-5">Gratis Ongkir</p>
              </a>
            </div>
            <div>
              <a href="Garansi_Lotte.html">
                <p className="py-4 pl-5">Garansi Lotte</p>
              </a>
            </div>
            <div>
              <a href="Lacak_Pesanan.html">
                <p className="py-4 pl-5">Lacak Pesanan</p>
              </a>
            </div>
            <div>
              <a href="Kategori.html">
                <p className="py-4 pl-5">Kategori Pilihan</p>
              </a>
            </div>
            <div>
              <a href="Metode_Pembayaran.html">
                <p className="py-4 pl-5">Metode Pembayaran</p>
              </a>
            </div>
            <div>
              <a href="Bblm.html">
                <p className="py-4 pl-5">Beli Banyak Lebih Murah</p>
              </a>
            </div>
            <div>
              <a href="Pengembalian_Dana.html">
                <p className="py-4 pl-5">Pengembalian Barang & Dana</p>
              </a>
            </div>
            <div>
              <a href="Tentang_Kami.html">
                <p className="py-4 pl-5">Tentang kami</p>
              </a>
            </div>
            <div>
              <a href="Hubungi_Kami.html">
                <p className="py-4 pl-5">Hubungi Kami</p>
              </a>
            </div>
            <div>
              <a href="Privasi.html">
                <p className="py-4 pl-5">Kebijakan Privasi</p>
              </a>
            </div>
            <div>
              <a href="Snk.html">
                <p className="py-4 pl-5">Syarat & Ketentuan</p>
              </a>
            </div>
            <div className="modal-action mt-0 text-base">
              <button
                className="btn text-white bg-slate-500 border-0 drop-shadow-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
