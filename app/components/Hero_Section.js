"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/Basko_Wonogiri_Ads.png", alt: "Description of image 1" },
    { src: "/Service_Car_Ads.png", alt: "Description of image 2" },
    { src: "/Basko_Wonogiri_Ads.png", alt: "Description of image 3" },
    { src: "/Service_Car_Ads.png", alt: "Description of image 4" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setTitle(file.name);
    }
  };

  const handleGetLinkClick = () => {
    if (!fileName) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }

    const file = document.getElementById("file_input").files[0];
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5001/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Response from server:", xhr.responseText);
        setUploadProgress(100);
        setTimeout(() => {
          setIsUploading(false);
        }, 2000);
      } else {
        console.error("Upload failed with status:", xhr.status, xhr.statusText);
        console.error("Response from server:", xhr.responseText);
        setIsUploading(false);
      }
    };

    xhr.onerror = () => {
      console.error("An error occurred during the upload");
      setIsUploading(false);
    };

    setIsUploading(true);
    setUploadProgress(0);

    const totalDuration = 5000; // 10 detik
    const interval = totalDuration / 100; // interval untuk setiap 1%
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += 1;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(progressInterval);
        xhr.send(formData);
      }
    }, interval);
  };

  const handleCancelClick = () => {
    setIsUploading(false);
    setUploadProgress(0);
    document.getElementById("file_input").value = "";
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();
    const offsetX = ((clientX - left) / width - 0.5) * 20;
    const offsetY = ((clientY - top) / height - 0.5) * 20;

    setOffset({ x: offsetX, y: offsetY });
  };

  return (
    <div className="bg-transparent">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Secure Send</span>
              <img
                alt=""
                src="LOGO_SECURESEND_BLACK.png"
                style={{ width: "200px", height: "auto" }}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 bg-white rounded-xl px-7 py-4 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 bg-white rounded-xl px-6 py-4 shadow-lg"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="LOGO_SECURESEND_BLACK.png"
                  style={{ width: "200px", height: "auto" }}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="text-center lg:text-left"
            style={{
              display: "inline-block",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setOffset({ x: 0, y: 0 })}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-96 xl:w-4/5 lg:w-3/4 md:w-96 sm:w-80 mx-auto"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.1s ease",
              }}
            />
          </div>
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            {isUploading ? (
              <div className="card bg-white max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                  <div className="flex justify-center">
                    <div
                      className="radial-progress mb-4 bg-slate-200 text-slate-400 text-6xl font-bold border-slate-200 border-8 w-60 h-60"
                      style={{ "--value": uploadProgress }}
                      role="progressbar"
                    >
                      {uploadProgress}%
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-black font-medium text-2xl mb-4">
                      {uploadProgress < 100 ? "Transferring..." : "Completed!"}
                    </div>
                    <div className="text-black">Mengirim 1 file</div>
                    <div className="text-black mb-4">
                      {uploadProgress} Bytes dari 500 KB Terunggah
                    </div>
                  </div>
                  <button
                    className="btn bg-transparent rounded-3xl border-none shadow-none hover:text-white hover:bg-sky-700 bg-sky-500"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            ) : (
              <form className="card-body">
                <div className="mb-4">
                  <img
                    src="LOGO_SECURESEND_BLACK.png"
                    alt="deskripsi gambar"
                    className="w-full max-w-xs rounded-lg"
                  />
                  <p className="text-sm text-black mt-2">
                    Mudah, hanya dengan satu klik.
                  </p>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  id="file_input"
                  multiple
                  onChange={handleFileChange}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full max-w-xs text-sm bg-inherit text-black font-semibold"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="textarea textarea-bordered text-sm bg-inherit text-black"
                  placeholder="Message"
                ></textarea>
                <button
                  className="btn hover:bg-sky-700 bg-sky-500 border-0 text-white"
                  type="button"
                  onClick={handleGetLinkClick}
                >
                  Get a link
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
