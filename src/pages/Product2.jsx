import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import oq1 from "../assets/img/oq1.png";
import quloq from "../assets/img/quloq.png";
import qora from "../assets/img/qora.png"
import kalomka from "../assets/img/kalomka.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import airphots from "../assets/img/airphots.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import opahon from "../assets/img/opahon.jpg";
import matreal from "../assets/img/matreal.jpg";
import qol from "../assets/img/qol.jpg";
import { useState, useEffect } from "react";

const Product2 = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.container}`}>
        <div className="my-10">
          <NavLink
            className="my-10 inline-block text-xl font-semibold"
            to="/home"
          >
            Ortga qaytish
          </NavLink>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-300 w-[320px] sm:w-[550px] px-16 py-10 my-8 md:my-10 sm:mx-0 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px] xl:py-28 xl:px-32">
              <img className="w-[300px] h-[250px] sm:w-[300px] sm:h-[300px]" src={oq1} alt="" />
            </div>
            <div className="ml-10 mt-5 md:my-10 md:ml-16 lg:ml-40 lg:mt-20">
              <h2 className="text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
                XX59 <br />
                Headphones
              </h2>
              <p className="opacity-60 w-full md:w-72 lg:w-full">
                XX59 minigarnituralari yordamida deyarli hamma joyda audiodan
             rohatlaning va uni o'zingizning didingizga qarab sozlang.
              Zamonaviy, ammo bardoshli ko'p qirrali simsiz eshitish
                vositasi uyda yoki harakatda ajoyib hamrohdir.
              </p>
              <b>400 ming</b>

              <div className="flex my-5">
                <div className="flex justify-center mr-2 lg:mr-8">
                  <button
                    onClick={() =>
                      setCount((count) => {
                        if (count > 1) {
                          return count - 1;
                        } else {
                          return 1;
                        }
                      })
                    }
                    className="w-10 h-8 text-3xl rounded-lg bg-[#D87D4A] text-white flex justify-center items-center"
                  >
                    -
                  </button>
                  <span className="text-2xl px-5">{count}</span>
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="w-10 h-8 text-3xl rounded-lg bg-[#D87D4A] text-white flex justify-center items-center"
                  >
                    +
                  </button>
                </div>
                <Link
                  to="/forma"
                  className="w-36 h-8 bg-[#D87D4A] text-white text-center pt-1"
                >
                  SOTIB OLISH
                </Link>
              </div>
            </div>
          </div>
          <div className="flex ml-10 mb-5 md:mb-20">
            <div  className="mt-5">
              <h3 className="text-2xl font-semibold mb-8 my-6">XUSUSIYATLARI</h3>
              <p className="opacity-60 md:w-[600px] lg:w-[600px]">
                Ushbu naushniklar har qanday joyga olib ketish uchun etarlicha
                og'ir, yuqori sifatli materiallardan yaratilgan. Uning
                ixcham katlangan dizayni konfor va minimalist uslubni
                sayohat qilish uchun juda mos keladi. Kolyulli uzatish
                videolar bilan audio sinxronlashtirish uchun eng so'nggi simsiz
                texnologiyalar bilan ta'minlanadi. <br />
                <br />
                Oddiy naushnikdan ko'proq, bu boshliq mos keladigan smartfon
                bilan bog'langanda aniq, qo'lsiz qo'ng'iroqlar uchun
                o'rnatilgan mikrofonga ega. Musiqa va qo'ng'iroqlarni 
                boshqarish Eshikka kirish uchun oson kirish moslamasi
                tugmalarini bosing. XX59 drigini qanday ishlatishingizdan
                qat'iy nazar, siz butun USB-C orqali tezda tezkor
                zaryadlanadigan ta'sirchan 30 soatlik batareya zaryadingiz
                tufayli
                buni amalga oshirishingiz mumkin.
              </p>
            </div>
            <div className="hidden lg:inline-block lg:ml-10">
              <h3 className="text-xl font-semibold my-8">qutida</h3>
              <b className="text-[#D87D4A] flex my-6">
                1x <p className="opacity-60 text-black">Eshitish vositasi</p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                2x{" "}
                <p className="opacity-60 text-black">
                  Quloqchalarni almashtirish
                </p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                1x{" "}
                <p className="opacity-60 text-black">
                  Foydalanuvchi uchun qo'llanma
                </p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                1x{" "}
                <p className="opacity-60 text-black">3,5 mm 5 m audio kabel</p>
              </b>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 lg:mr-10">
              <img className="w-[450px] h-[85px] sm:h-[150px] md:h-[250px] mb-3 lg:mb-10 rounded-xl" src={opahon} alt="" />
              <img className="w-[450px] rounded-xl" src={matreal} alt="" />
            </div>
            <div>
              <img className="rounded-xl" src={qol} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-center my-20">
              sizga ham yoqishi mumkin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:mt-20 md:mb-20 space-x-0 md:space-x-5 lg:space-x-0">
              <div>
                <div className="mx-4 py-20 px-20 w-[300px] h-[318px] bg-gray-300 rounded-xl lg:py-8 lg:px-8">
                  <img className="w-54 h-44 lg:w-60 lg:h-72" src={qora} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center mt-10">
                  XX99 MARK I
                </h2>
                <NavLink
                  className="w-40 h-12 inline-block bg-[#D87D4A] text-white font-semibold pt-3 text-center ml-20 my-10"
                  to="/product"
                >
                  BATAFSIL
                </NavLink>
              </div>
              <div>
                <div className="mx-4 py-20 px-20 w-[300px] h-[318px] bg-gray-300 rounded-xl lg:py-8 lg:px-8">
                  <img className="w-54 h-44 lg:w-60 lg:h-72" src={quloq} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center pt-10">
                  XX59
                </h2>
                <NavLink
                  className="w-40 h-12 inline-block bg-[#D87D4A] text-white font-semibold pt-3 text-center ml-20 my-10"
                  to="/product1"
                >
                  BATAFSIL
                </NavLink>
              </div>
              <div>
                <div className="mx-4 py-20 px-20 w-[300px] h-[318px] bg-gray-300 rounded-xl lg:py-8 lg:px-8">
                  <img className="w-54 h-44 lg:w-60 lg:h-72" src={kalomka} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center pt-10">
                  ZX9 SPEAKER
                </h2>
                <NavLink
                  className="w-40 h-12 inline-block bg-[#D87D4A] mx-20 text-white font-semibold pt-3 text-center my-10"
                  to="/product3"
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
            <div className="rounded-xl sm:ml-7">
              <img className="mx-16 mb-[-70px] w-40 h-40" src={quloqchin} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">HEADPHONES</h2>
                <NavLink to="/product1" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-3 rounded-xl md:mx-4 lg:mx-4">
              <img className="mx-16 mb-[-70px] w-40 h-[150px]" src={kalomka} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">SPEAKERS</h2>
                <NavLink to="/product3" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-8 rounded-xl">
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
              Nyu-York shahrining markazida joylashgan Audiophile - bu
              yuqori sifatli naushniklar, naushniklar, dinamiklar va audio
              aksessuarlar uchun eng yaxshi do'kon. Bizda keng ko'rgazma
               zali va hashamatli namoyish xonalari mavjud bo'lib,
              siz bizning mahsulotlarimizning keng assortimentini ko'rib
              chiqishingiz va sinab ko'rishingiz mumkin. Audiophile-ni
              portativ audio uskunangizni sotib olish uchun eng yaxshi
              joyga aylantiradigan ba'zi ajoyib odamlar bilan tanishish uchun do'konimizga tashrif buyuring.
            </p>
          </div>
          <>
            <img className="rounded-xl md:w-[500px] md:h-full lg:w-full lg:h-full" src={bitmap4} alt="" />
          </>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Product2;
