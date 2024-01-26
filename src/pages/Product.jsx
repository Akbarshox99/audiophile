import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import qora from "../assets/img/qora.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import iphone from "../assets/img/iphone.jpg";
import pp from "../assets/img/pp.jpg";
import quloq from "../assets/img/quloq.png";
import oq from "../assets/img/oq.png";
import kalomka from "../assets/img/kalomka.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/Path 2.png";
import airphots from "../assets/img/airphots.png";
import { useState, useEffect } from "react";

const Product = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.container}`}>
        <div className="py-10">
          <NavLink className="text-2xl font-bold" to="/home">
            Ortga qaytish
          </NavLink>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-300 w-[320px] sm:w-[530px] px-16 py-10 my-8 md:my-10 sm:mx-0 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px] xl:py-28 xl:px-32">
              <img
                className="w-[300px] h-[250px] sm:w-[300px] sm:h-[300px]"
                src={qora}
                alt=""
              />
            </div>
            <div className="ml-10 mt-5 md:my-10 md:ml-16 lg:ml-40 lg:mt-20">
              <b className="text-[#D87D4A] sm:mb-3 md:mb-3  lg:mb-6 inline-block">
                YANGI MAHSULOT
              </b>
              <h2 className="text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
                XX99 Mark II <br />
                Headphones
              </h2>
              <p className="opacity-60 w-full md:w-72 lg:w-full">
                Yangi XX99 Mark II minigarnituralari toza audioning cho'qqisi
                hisoblanadi. Bu studiya sifatidagi tovushning muvozanatli
                chuqurligi va aniqligini qayta ishlab chiqarish orqali sizning
                yuqori darajadagi eshitish vositalaridan foydalanish tajribasini
                qayta belgilaydi.
              </p>
              <b className="mb-6 inline-block">210 ming</b>
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
              <h2 className="text-2xl font-semibold mb-8 my-6">
                XUSUSIYATLARI
              </h2>
              <p className="opacity-60 md:w-[600px] lg:w-[600px]">
                Haqiqiy charm bosh tasma va yuqori sifatli quloqchinlar bilan
                jihozlangan ushbu minigarnituralar cheksiz tinglashdan
                zavqlanishni yaxshi ko'radiganlar uchun yuqori qulaylikni
                ta'minlaydi. U har qanday vaziyat uchun mo'ljallangan intuitiv
                boshqaruvlarni o'z ichiga oladi. Ish qo‘ng‘irog‘ini qabul
                qilyapsizmi yoki shaxsiy makoningizda bo‘lasizmi, avtomatik
                yoqish/o‘chirish va pauza funksiyalari hech qachon o‘tkazib
                yubormaslikni ta’minlaydi. <br /> <br />
                O'rnatilgan ekvalayzerli ilg'or faol shovqinni bekor qilish
                sizga o'zingizning shartlaringiz bo'yicha audio dunyongizni his
                qilish imkonini beradi. Bu sizga ovozingizdan xotirjam
                zavqlanish imkonini beradi, lekin kerak bo'lganda atrofingiz
                bilan tezda muloqot qiling. XX99 Mark II naushniklari Bluetooth
                5.0 standartiga mos ulanish va 17 soatlik batareya quvvati bilan
                birgalikda sizga yuqori ovoz, ilg'or texnologiya va zamonaviy
                dizayn estetikasini beradi.
              </p>
            </div>
            <div className="hidden lg:inline-block lg:ml-10">
              <h3 className="text-xl font-semibold my-8">qutida</h3>
              <b className="flex text-[#D87D4A] my-6">
                1x <p className="text-black">Eshitish vositasi</p>
              </b>
              <b className="flex text-[#D87D4A] my-6">
                2x <p className="text-black">Quloqchalarni almashtirish</p>
              </b>
              <b className="flex text-[#D87D4A] my-6">
                1x <p className="text-black">Foydalanuvchi uchun qo'llanma</p>
              </b>
              <b className="flex text-[#D87D4A] my-6">
                1x <p className="text-black">3,5 mm 5 m audio kabel</p>
              </b>
              <b className="flex text-[#D87D4A] my-6">
                1x <p className="text-black">Sayohat sumkasi</p>
              </b>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 lg:mr-10">
              <img
                className="w-[450px] h-[85px] sm:h-[150px] md:h-[250px] mb-3 lg:mb-10 rounded-xl"
                src={bitmap4}
                alt=""
              />
              <img className="w-[450px] rounded-xl" src={iphone} alt="" />
            </div>
            <div>
              <img className="rounded-xl" src={pp} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-center my-20">
              sizga ham yoqishi mumkin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:mt-20 md:mb-20 space-x-0 md:space-x-5 lg:space-x-0">
              <div>
                <div className="w-[300px] h-[318px] bg-gray-300 rounded-xl py-8 px-8">
                  <img className="w-60 h-72" src={quloq} alt="" />
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
                <div className="w-[300px] h-[318px] bg-gray-300 rounded-xl py-8 px-8">
                  <img className="w-60 h-72" src={oq} alt="" />
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
                <div className="w-[300px] h-[318px] bg-gray-300 rounded-xl py-8 px-8">
                  <img className="w-60 h-72" src={kalomka} alt="" />
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
          {/* // cta */}
          <div className={`${styles.container}`}>
            <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-5 md:my-32">
              {/* cta */}
              <div className="pt-3 lg:pt-32">
                <h3 className="text-2xl font-medium mb-3 lg:text-5xl lg:font-medium lg:mb-8 w-[300px] sm:w-[400px] md:w-full md:text-3xl md:font-semibold md:mb-3">
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
    </>
  );
};

export default Product;
