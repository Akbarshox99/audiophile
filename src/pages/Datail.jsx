import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import airphots from "../assets/img/airphots.png";
import bitmap from "../assets/img/bitmap.jpg";
import Bitmap1 from "../assets/img/Bitmap1.png";
import bit from '../assets/img/bit.jpg'
import quloq from "../assets/img/quloq.png";
import oq from "../assets/img/oq.png";
import kalomka from "../assets/img/kalomka.png";
import bitmap4 from "../assets/img/Bitmap4.png";
import quloqchin from "../assets/img/quloqchin.png";
import path from "../assets/img/path-2.png";

const Datail = () => {
  /*  */
  const [count, setCount] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={`${styles.container}`}>
        <div className="my-10">
          <NavLink className="font-semibold" to="/home">
            Ortga qaytish
          </NavLink>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-300 w-[320px] sm:w-[520px] px-16 py-10 my-8 md:my-10 sm:mx-0 md:mx-0 md:w-[400px] md:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[540px] xl:py-28 xl:px-32">
              <img
                className="w-[300px] h-[200px] sm:w-[300px] sm:h-[300px]"
                src={airphots}
                alt=""
              />
            </div>
            <div className="ml-10 mt-5 md:my-20 md:ml-20 lg:ml-40 lg:mt-20">
              <h3 className="text-[#D87D4A] sm:mb-3 md:mb-3  lg:mb-6 inline-block">
                YANGI MAHSULOT
              </h3>
              <h1 className=" text-3xl font-semibold sm:mb-3 md:text-3xl md:font-bold lg:text-4xl lg:font-bold md:mb-3 lg:mb-8">
                YX1 WIRELESS <br />
                EARPHONES
              </h1>
              <p className="opacity-60 w-full md:w-64 lg:w-full">
                Yangi YX1 simsiz quloqchinlarining maxsus dinamik drayverlari
                bilan tinglash tajribangizni moslashtiring. Faol shovqinni bekor
                qilish xususiyati bilan shovqinli muhitda ham ajoyib yuqori
                aniqlikdagi ovozdan rohatlaning.
              </p>
              <b>144 ming</b>

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
            <div className="mb-5 md:mb-20">
              <h2 className="text-2xl font-semibold mb-8 my-6">
                XUSUSIYATLARI
              </h2>
              <p className="opacity-60 md:w-[600xp] lg:w-[500px] lg:mr-40">
                Innovatsion akustik texnologiya tufayli tengsiz stereo tovushni
                his eting. Kun bo'yi taqish uchun mo'ljallangan
                takomillashtirilgan ergonomikaga ega bu inqilobiy quloqchinlar
                ajoyib shovqin izolyatsiyasi va chinakam immersiv ovozdan
                bahramand bo'lgan holda kun bo'yi to'liq qulaylikni ta'minlab,
                sizga mukammal moslashishni ta'minlash uchun nozik tarzda ishlab
                chiqilgan.
                <br />
                YX1 simsiz naushniklarida ovoz balandligi, musiqa, qo‘ng‘iroqlar
                va ikkala quloqchinga o‘rnatilgan ovozli yordamchilar uchun
                moslashtirilgan boshqaruv elementlari mavjud. Yangi 7 soatlik
                batareya quvvati zaryadlash qutisi bilan 28 soatgacha
                uzaytirilishi mumkin, bu sizga uzluksiz o'ynash vaqtini beradi.
                Chayqalishga chidamli dizaynga ega ajoyib hunarmandchilik endi
                butunlay yangi oq va kulrang ranglar sxemasida, shuningdek,
                mashhur klassik qora rangda mavjud.
              </p>
            </div>
            <div className="hidden lg:inline-block">
              <b>qutida</b>
              <b className="flex text-[#D87D4A] my-8">
                2x <p className="text-black">Eshitish vositasi</p>
              </b>
              <b className="flex text-[#D87D4A] my-8">
                6x <p className="text-black">Ko'p o'lchamli quloqchalar</p>
              </b>
              <b className="flex text-[#D87D4A] my-8">
                1x <p className="text-black">Foydalanuvchi uchun qo'llanma</p>
              </b>
              <b className="flex text-[#D87D4A] my-8">
                1x <p className="text-black">USB-C zaryadlovchi kabeli</p>
              </b>
              <b className="flex text-[#D87D4A] my-8">
                1x <p className="text-black">Sayohat sumkasi</p>
              </b>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 lg:mr-10">
              <img
                className="w-[450px] mb-3 lg:mb-10 rounded-xl"
                src={bitmap}
                alt=""
              />
              <img className="w-[450px] rounded-xl" src={Bitmap1} alt="" />
            </div>
            <div>
              <img src={bit} alt="" />
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
            <div className="rounded-xl mx-6 sm:ml-7">
              <img className="mx-20 mb-[-70px]" src={quloqchin} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">HEADPHONES</h2>
                <NavLink to="/product1" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-3 px-6 rounded-xl md:mx-4 lg:mx-4">
              <img className="mx-20 mb-[-70px]" src={kalomka} alt="" />
              <div className="bg-[#F1F1F1] w-72 h-40">
                <h2 className="font-semibold text-center pt-20">SPEAKERS</h2>
                <NavLink to="/product3" className="flex items-center ml-32">
                  <b className="mr-2 opacity-60">do'kon</b>
                  <img src={path} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="mt-8 px-6 rounded-xl">
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

export default Datail;
