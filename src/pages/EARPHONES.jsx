import React, { useEffect } from "react";
import { styles } from "../styles";
import airphots from "../assets/img/airphots.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import kalomka from "../assets/img/kalomka.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import { NavLink } from "react-router-dom";

const EARPHONES = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-black">
        <div className={`${styles.container}`}>
          <div className="py-16">
            <h1 className="text-2xl font-semibold px-20 sm:pl-[300px] md:text-3xl md:font-bold text-white md:pl-[300px] xl:pl-[550px] lg:text-4xl lg:font-bold">
              EARPHONES
            </h1>
          </div>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-300 sm:w-[520px] px-20 py-20 sm:px-32 my-8 md:my-10 sm:mx-0 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px] xl:py-28 xl:px-32">
            <img
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[200px] md:w-[400px] md:h-[250px]"
              src={airphots}
              alt=""
            />
          </div>
          <div className="mt-5 md:ml-20 md:my-20 lg:ml-40 lg:mt-20">
            <b className="text-[#D87D4A] sm:mb-3 md:mb-3  lg:mb-6 inline-block">
              NEW PRODUCT
            </b>
            <h3 className=" text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
              YX1 WIRELESS <br />
              EARPHONES
            </h3>
            <p className="opacity-60 w-full lg:w-full">
              Yangi YX1 simsiz quloqchinlarining maxsus dinamik drayverlari
              bilan tinglash tajribangizni moslashtiring. Faol shovqinni bekor
              qilish xususiyati bilan shovqinli muhitda ham ajoyib yuqori
              aniqlikdagi ovozdan rohatlaning.
            </p>
            <NavLink
              to="/datali"
              className=" inline-block w-40 h-12 bg-[#D87D4A] text-white font-semibold pt-3 pl-2 text-center my-6"
            >
              BATAFSIL
            </NavLink>
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

export default EARPHONES;
