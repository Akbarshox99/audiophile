import React, { useEffect } from "react";
import { styles } from "../styles";
import { NavLink } from "react-router-dom";
import qora from "../assets/img/qora.png";
import quloq from "../assets/img/quloq.png";
import oq from "../assets/img/oq.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import kalomka from "../assets/img/kalomka.png";
import airphots from "../assets/img/airphots.png";
import bitmap4 from "../assets/img/Bitmap4.png";

const HEADPHONES = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-black">
        <div className={`${styles.container}`}>
          <div className="py-16">
            <h1 className="text-2xl font-semibold px-20 sm:pl-[300px] md:text-3xl md:font-bold text-white md:pl-[300px] xl:pl-[550px] lg:text-4xl lg:font-bold">
              HEADPHONES
            </h1>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className="my-10 lg:my-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* 1 */}
            <div className="bg-gray-300 w-[330px] md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px]">
              <img
                className="w-[300px] mx-4 sm:px-20 sm:py-20 sm:w-[600px] md:mx-2 md:my-2"
                src={qora}
                alt=""
              />
            </div>
            <div className="ml-0 mt-5 md:ml-20 lg:ml-40 lg:mt-20">
              <b className="text-[#D87D4A] sm:mb-3 md:mb-3  lg:mb-6 inline-block">
                NEW PRODUCT
              </b>
              <h2 className=" text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
                XX99 Mark II <br />
                Headphones
              </h2>
              <p className="opacity-70 mb-3 sm:w-full sm:mb-3 md:mb-3 lg:mb-8 xl:w-80">
                Yangi XX99 Mark II minigarnituralari toza audioning cho'qqisi
                hisoblanadi. Bu studiya sifatidagi tovushning muvozanatli
                chuqurligi va aniqligini qayta ishlab chiqarish orqali sizning
                yuqori darajadagi eshitish vositalaridan foydalanish tajribasini
                qayta belgilaydi.
              </p>
              <NavLink
                to="/product"
                className="w-52 h-12 bg-[#D87D4A] text-xl text-white inline-block text-center pt-3"
              >
                BATAFSIL
              </NavLink>
            </div>
            {/* 1 tugadi */}

            {/* 2 */}
            <div className="mt-8 mx-0 sm:mb-5 lg:mr-40 lg:mt-20 lg:pt-20">
              <h2 className="text-4xl font-bold mb-8">
                XX99 Mark I <br />
                Headphones
              </h2>
              <p className="opacity-70 mb-10 sm:w-full xl:w-80">
                Eshitish vositalarining oltin standarti sifatida klassik XX99
                Mark I audiofillar, miks muhandislari va musiqa ixlosmandlari
                uchun studiyada ham, yo‘lda ham batafsil va aniq audio
                reproduktsiyani taklif etadi.
              </p>
              <NavLink
                to="/product1"
                className="w-52 h-12 bg-[#D87D4A] text-xl text-white inline-block text-center pt-3"
              >
                BATAFSIL
              </NavLink>
            </div>
            <div className="bg-gray-300 w-[330px] my-6 py-6 px-10 sm:mb-6 sm:mx-32 md:mx-0 md:my-6 md:w-[370px] md:h-[400px] lg:w-[480px] lg:h-[540px]">
              <img
                className="w-[200px] mx-4 sm:w-[300px] md:w-[350px] md:px-20 md:py-20 lg:w-[450px] md:mx-2 md:my-2"
                src={quloq}
                alt=""
              />
            </div>
            {/* 2 tugadi */}
            {/* 3 */}
            <div className="bg-gray-300 w-[330px] my-6 py-6 px-10 sm:mx-32 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px]">
              <img
                className="w-[200px] mx-4 sm:px-20 sm:py-20 sm:w-[600px] md:mx-2 md:my-2"
                src={oq}
                alt=""
              />
            </div>
            <div className="sm:ml-10 sm:mt-6 md:ml-20 lg:ml-40 lg:mt-20">
              <h2 className="text-4xl font-bold mb-8">
                XX59
                <br />
                Headphones
              </h2>
              <p className="opacity-70 mb-10 sm:w-full xl:w-80">
                XX59 minigarnituralari yordamida deyarli hamma joyda audiodan
                rohatlaning va uni o'zingizning didingizga qarab sozlang.
                Zamonaviy, ammo bardoshli ko'p qirrali simsiz eshitish vositasi
                uyda yoki harakatda ajoyib hamrohdir.
              </p>
              <NavLink
                to="/product2"
                className="w-52 h-12 bg-[#D87D4A] text-xl text-white inline-block text-center pt-3"
              >
                BATAFSIL
              </NavLink>
            </div>
            {/* 3 tugadi */}
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
            <div className="mt-3 rounded-xl px-6 md:mx-4 lg:mx-4">
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

export default HEADPHONES;
