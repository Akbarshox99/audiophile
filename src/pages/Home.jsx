import React, { useEffect } from "react";
import { styles } from "../styles";
import { NavLink } from "react-router-dom";
import naushnik from "../assets/img/naushnik.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import kalomka from "../assets/img/kalomka.png";
import airphots from "../assets/img/airphots.png";
import kalomka1 from "../assets/img/kalomka1.png";
import qq from "../assets/img/qq.png";
import bitmap4 from "../assets/img/Bitmap4.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* hero */}
      <div className="bg-[#0E0E0E]">
        <div className={`${styles.container}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="text-white">
              <div className="flex flex-col pl-20">
                <p className="opacity-[0.4964] pt-12 mb-5">NEW PRODUCT</p>
                <h1 className="text-2xl font-semibold w-[200px] sm:w-[300px] md:text-4xl md:font-bold md:w-[396px] mb-5">
                  XX99 Mark II <br /> Headphones
                </h1>
                <p className="opacity-70 mb-5 inline-block w-full sm: md:w-[300px] lg:w-80">
                  Qiziq musiqa ixlosmandlari uchun yaratilgan tabiiy, jonli
                  audio va ajoyib qurilish sifatini his qiling.
                </p>
                <NavLink
                  to="/product"
                  className="w-[160px] md:w-[200px] h-12 bg-[#D87D4A] mb-20 inline-block text-center pt-3"
                >
                  BATAFSIL
                </NavLink>
              </div>
            </div>
            <img src={naushnik} alt="" />
          </div>
        </div>
      </div>
      {/* main */}
      <main>
        <div className={`${styles.container}`}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  md:mt-20 md:mb-20 space-x-0 md:space-x-5 lg:space-x-0 xl:space-x-8">
            {/* main */}
            <div className="rounded-xl sm:ml-7">
              <img className="mx-20 mb-[-70px]" src={quloqchin} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">HEADPHONES</h2>
                <NavLink to="/product1" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-3 rounded-xl md:mx-4 lg:mx-4">
              <img className="mx-20 mb-[-70px]" src={kalomka} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">SPEAKERS</h2>
                <NavLink to="/product3" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-8 rounded-xl">
              <img className="mx-20 mb-[-70px]" src={airphots} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">EARPHONES</h2>
                <NavLink to="/datali" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            {/* main tugadi */}
          </div>
        </div>
      </main>
      {/* Kalit so'zlar */}
      <div className={`${styles.container}`}>
        <div className="bg-[#D87D4A] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* sariq */}
            <>
              <img
                className="w-40 mx-20 sm:mx-40 md:py-8 md:w-60 md:ml-20"
                src={kalomka}
                alt=""
              />
            </>
            <div className="sm:px-32 py-5 md:px-10">
              <h3 className="px-5 text-white mb-8 text-xl font-semibold md:pt-10 md:text-2xl md:font-semibold">
                ZX9 <br />
                SPEAKER
              </h3>
              <p className="px-5 text-white opacity-70 w-full mb-8 lg:w-80">
                Haqiqatan ham ajoyib ovozni yetkazib berish uchun ajoyib tarzda
                qurilgan premium dinamiklarga yangilang.
              </p>
              <NavLink
                to="/product3"
                className="w-[160px] h-12 ml-5 bg-black text-white inline-block text-center pt-3"
              >
                BATAFSIL
              </NavLink>
            </div>
            {/* sariq tugadi */}
          </div>
        </div>
      </div>
      {/* Qisqa e'lonlar */}
      <div className={`${styles.container}`}>
        <div className="bg-gray-400 w-full h-full my-20">
          <div className="grid grid-cols-2 gap-10">
            {/* kulrang */}
            <div className="text-center pt-20 sm:pt-32 md:pt-40 px-4 lg:pt-32">
              <h3 className="text-lg font-medium pb-3  md:text-2xl md:font-semibold md:mb-8">
                ZX7 SPEAKER
              </h3>
              <NavLink
                to="/product4"
                className="w-32 h-10 md:w-40 md:h-12 border border-black inline-block py-3"
              >
                BATAFSIL
              </NavLink>
            </div>
            <>
              <img className="py-5 md:pl-20" src={kalomka1} alt="" />
            </>
            {/* kulrang tugashi */}
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* grid */}
          <>
            <img className="rounded-lg h-96" src={qq} alt="" />
          </>
          <div className="bg-gray-400 py-20 text-center rounded-lg md:pt-36">
            <h3 className="text-2xl font-semibold mb-8">YX1 EARPHONES</h3>
            <NavLink
              to="/datali"
              className="w-40 h-12 border border-black inline-block pt-3 "
            >
              BATAFSIL
            </NavLink>
          </div>
          {/* grid tugadi */}
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-5 md:my-32">
          {/* cta */}
          <div className="pt-3 lg:pt-32">
            <h3 className=" text-2xl font-medium mb-3 lg:text-5xl lg:font-medium lg:mb-8 w-[327px] sm:w-[400px] md:w-full md:text-3xl md:font-semibold md:mb-3">
              Sizga <b className="text-[#D87D4A]">eng yaxshi</b> audio
              moslamalarni olib keladi
            </h3>
            <p className="opacity-70 md:w-full md:h-[300px] lg:w-full">
              Nyu-York shahrining markazida joylashgan Audiophile - bu yuqori
              sifatli naushniklar, naushniklar, dinamiklar va audio aksessuarlar
              uchun eng yaxshi do'kon. Bizda keng ko'rgazma zali va hashamatli
              namoyish xonalari mavjud bo'lib, siz bizning mahsulotlarimizning
              keng assortimentini ko'rib chiqishingiz va sinab ko'rishingiz
              mumkin. Audiophile-ni portativ audio uskunangizni sotib olish
              uchun eng yaxshi joyga aylantiradigan ba'zi ajoyib odamlar bilan
              tanishish uchun do'konimizga tashrif buyuring.
            </p>
          </div>
          <>
            <img
              className="rounded-xl md:w-[500px] md:h-full lg:w-full lg:h-full"
              src={bitmap4}
              alt=""
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
