import React, { useEffect } from "react";
import { styles } from "../styles";
import kalomka from "../assets/img/kalomka.png";
import kalomka1 from "../assets/img/kalomka1.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import airphots from "../assets/img/airphots.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import { NavLink } from "react-router-dom";

const SPEAKERS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-black">
        <div className={`${styles.container}`}>
          <div className="py-16">
            <h1 className="text-2xl font-semibold px-24 sm:pl-[300px] md:text-3xl md:font-bold text-white md:pl-[300px] xl:pl-[550px] lg:text-4xl lg:font-bold">
              SPEAKERS
            </h1>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 md:my-20">
          {/* 1 */}
          <div className="bg-gray-300 px-20 mb-3 md:px-0 sm:w-full sm:pt-12 sm:h-[400px] rounded-xl lg:py-20 h-[300px]  lg:h-[500px] lg:w-full">
            <img
              className="w-60 h-56 my-8 sm:w-60 sm:h-60 sm:ml-10 sm:my-10 lg:w-60 lg:h-80 lg:mx-28"
              src={kalomka}
              alt=""
            />
          </div>
          <div className="md:ml-20 md:pt-11 lg:mt-10 lg:ml-40">
            <b className="text-[#D87D4A] mb-2 lg:mb-4 inline-block">
              NEW PRODUCT
            </b>
            <h2 className="md:text-2xl font-bold lg:text-4xl lg:font-bold mb-2 lg:mb-8">
              ZX9 <br />
              SPEAKER
            </h2>
            <p className="opacity-60 mb-2 lg:mb-5">
              Ovoz tizimini yangi ZX9 faol bilan yangilang ma'ruzachi. Bu
              haqiqatan ham taklif qiladigan kitob javonining dinamik tizimi
              simsiz ulanish -- ko'proq uchun yangi imkoniyatlar yaratish
              yoqimli va amaliy audio sozlamalari.
            </p>
            <NavLink
              to="/product3"
              className="w-40 h-12 bg-[#D87D4A] text-white font-semibold inline-block text-center pt-3"
            >
              BATAFSIL
            </NavLink>
          </div>
          {/* 2 */}
          <div className="md:pt-11 lg:mt-10 lg:mr-40 my-4">
            <b className="text-[#D87D4A] mb-2 lg:mb-4 inline-block">
              NEW PRODUCT
            </b>
            <h2 className="md:text-2xl font-bold lg:text-4xl lg:font-bold mb-2 lg:mb-8">
              ZX7 <br />
              SPEAKER
            </h2>
            <p className="opacity-60 mb-2 lg:mb-5">
              Minimal yo'qotish bilan yuqori sifatli ovozni simsiz uzating. ZX7
              kitob javoni karnayida uyda yoki studiyada foydalanish uchun
              quvvatli karnaylarning yuqori qismini ifodalovchi yuqori
              darajadagi audiofil komponentlardan foydalanadi.
            </p>
            <NavLink
              to="/product4"
              className="w-40 h-12 bg-[#D87D4A] text-white font-semibold inline-block text-center pt-3"
            >
              BATAFSIL
            </NavLink>
          </div>
          <div className="bg-gray-300 px-20 mb-3 md:px-0 sm:w-full sm:pt- sm:h-[400px] rounded-xl lg:py-20 h-[300px]  lg:h-[500px] lg:w-full">
            <img
              className="w-60 h-60 my-8 sm:w-60 sm:h-80 sm:ml-10 sm:my-10 lg:w-60 lg:h-80 lg:mx-28"
              src={kalomka1}
              alt=""
            />
          </div>
        </div>
      </div>
       {/* main */}
       <main>
        <div className={`${styles.container}`}>
          <div className="my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  md:mt-20 md:mb-20 space-x-0 md:space-x-5 lg:space-x-0 xl:space-x-8">
            {/* main */}
            <div className="rounded-xl mx-6 sm:ml-7">
              <img className="mx-16 mb-[-70px] w-40 h-40" src={quloqchin} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">HEADPHONES</h2>
                <NavLink to="/product1" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-3 px-6 rounded-xl md:mx-4 lg:mx-4">
              <img className="mx-16 mb-[-70px] w-40 h-[150px]" src={kalomka} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">SPEAKERS</h2>
                <NavLink to="/product3" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-8 px-6 rounded-xl">
              <img className="mx-20 mb-[-70px] w-32 h-32" src={airphots} alt="" />
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
      {/* // cta */}
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-5 md:my-32">
          {/* cta */}
          <div className="pt-3 lg:pt-32">
            <h3 className=" text-2xl font-medium mb-3 lg:text-5xl lg:font-medium lg:mb-8 w-[300px] sm:w-[400px] md:w-full md:text-3xl md:font-semibold md:mb-3">
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

export default SPEAKERS;
