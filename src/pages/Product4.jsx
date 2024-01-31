import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import kalomka1 from "../assets/img/kalomka1.png";
import koz from "../assets/img/koz.png";
import odam from "../assets/img/odam.png";
import stol from "../assets/img/stol.png";
import quloq from "../assets/img/quloq.png";
import oq from "../assets/img/oq.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";
import kalomka from "../assets/img/kalomka.png";
import airphots from "../assets/img/airphots.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import { useState, useEffect } from "react";

const Product4 = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={`${styles.container}`}>
        <div className="my-10">
          <NavLink
            className="my-8 inline-block text-xl font-semibold"
            to="/home"
          >
            Ortga qaytish
          </NavLink>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-300 w-[320px] sm:w-[530px] px-16 py-10 my-8 md:my-10 sm:mx-0 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px] xl:py-28 xl:px-32">
              <img className="w-[300px] h-[250px] sm:w-[300px] sm:h-[300px]" src={kalomka1} alt="" />
            </div>
            <div className="ml-10 mt-5 md:my-10 md:ml-16 lg:ml-40 lg:mt-20">
              <h2 className="text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
                ZX7 <br />
                SPEAKER
              </h2>
              <p className="opacity-60 w-full md:w-72 lg:w-full">
                Minimal yoki yo'qotishsiz yuqori sifatli ovozni simsiz uzating.
               ZX7 dinamiki uy yoki studiyada foydalanish uchun quvvatli
                karnaylarning yuqori qismini ifodalovchi yuqori
                darajadagi audiofil komponentlardan foydalanadi.
              </p>
              <b>350 ming</b>

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
                  className="w-40 h-8 bg-[#D87D4A] text-white text-center pt-1"
                >
                  SOTIB OLISH
                </Link>
              </div>
            </div>
          </div>
          <div className="flex ml-10 mb-5 md:mb-20">
            <div className="mt-5">
              <h3 className="text-2xl font-semibold mb-8 my-6">XUSUSIYATLARI</h3>
              <p className="opacity-60 md:w-[600px] lg:w-[600px]">
                Yassi diafragmali tweeter konusning afzalliklaridan foydalaning.
                Bu tezkor javob tezligi va mukammal yuqori chastotalarni
                ta'minlaydi, bu esa past darajadagi kitob javoni
                karnaylari ta'minlay olmaydi.
                Vuferlar alyuminiydan tayyorlangan bo'lib, noyob va aniq ovoz
                chiqaradi. XLR kirishlari yanada rivojlangan foydalanish
                uchun mikserga ulanish imkonini beradi. <br />
                <br />
                ZX7 dinamiki zamonaviy dizayn va yuqori unumdorlikning ajoyib
                aralashmasidir. U akustik rezonansni kamaytiradigan MDF
                yog'och korpusiga ega. Ikki tomonlama ulanish bluetooth
                yoki an'anaviy optik va RCA kirish orqali ulanish imkonini
                beradi. Kiritish manbalarini almashtiring va ovoz
                balandligini o'z ichiga olgan simsiz masofadan boshqarish
                pulti yordamida barmoqlaringiz uchida boshqaring. Ushbu
                ko'p qirrali karnay haqiqiy tinglash tajribasini taqdim
                etish uchun jihozlangan.
              </p>
            </div>
            <div className="hidden lg:inline-block lg:ml-10">
              <h2 className="text-xl font-semibold my-8">qutida</h2>
              <b className="text-[#D87D4A] flex my-6">
                2x <p className="opacity-60 text-black">Dinamik birligi</p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                2x <p className="opacity-60 text-black">Dinamik mato paneli</p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                1x{" "}
                <p className="opacity-60 text-black">
                  Foydalanuvchi uchun qo'llanma
                </p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                1x{" "}
                <p className="opacity-60 text-black">
                  3,5 mm 7,5 m audio kabel
                </p>
              </b>
              <b className="text-[#D87D4A] flex my-6">
                1x <p className="opacity-60 text-black">7,5 m optik kabel</p>
              </b>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 lg:mr-10">
              <img className="w-[450px] h-[85px] sm:h-[150px] md:h-[250px] mb-3 lg:mb-10 rounded-xl" src={koz} alt="" />
              <img className="w-[450px] rounded-xl" src={odam} alt="" />
            </div>
            <div>
              <img className="rounded-xl" src={stol} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-center my-20">
              sizga ham yoqishi mumkin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:mt-20 md:mb-20 space-x-0 md:space-x-5 lg:space-x-0">
              <div>
                <div className="mx-4 py-20 px-20 w-[300px] h-[318px] bg-gray-300 rounded-xl lg:py-8 lg:px-8">
                  <img className="w-54 h-44 lg:w-60 lg:h-72" src={quloq} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center mt-10">
                  XX99 MARK I
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
                  <img className="w-54 h-44 lg:w-60 lg:h-72" src={oq} alt="" />
                </div>
                <h2 className="text-3xl font-semibold text-center pt-10">
                  XX59
                </h2>
                <NavLink
                  className="w-40 h-12 inline-block bg-[#D87D4A] text-white font-semibold pt-3 text-center ml-20 my-10"
                  to="/product2"
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
                  Nyu-York shahrining markazida joylashgan Audiophile - bu
                  yuqori sifatli naushniklar, naushniklar, dinamiklar va audio
                  aksessuarlar uchun eng yaxshi do'kon. Bizda keng ko'rgazma
                  zali va hashamatli namoyish xonalari mavjud bo'lib, siz
                  bizning mahsulotlarimizning keng assortimentini ko'rib
                  chiqishingiz va sinab ko'rishingiz mumkin. Audiophile-ni
                  portativ audio uskunangizni sotib olish uchun eng yaxshi joyga
                  aylantiradigan ba'zi ajoyib odamlar bilan tanishish uchun
                  do'konimizga tashrif buyuring.
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
      </div>
    </div>
  );
};

export default Product4;
