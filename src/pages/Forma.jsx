import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles";
import { ToastContainer, toast } from "react-toastify";
import telegram from "../assets/img/telegram.png";
import insta from "../assets/img/insta.png";
import "react-toastify/dist/ReactToastify.css";

const Forma = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const telegram_bot_id = "6899183892:AAFLffHF78cBEkHhdlxwi2NiX9JA8fDgoXA";
  const chat_id = 6322529768;

  const sendMessage = async () => {
    const message = `F I SH: ${name}\nNovmer: ${email}\nadressingiz: ${userMessage}\nMaxsulot nomi: ${text}\nMaxsulot soni: ${number}`;

    try {
      if (name.trim() != "" && email.trim() != "" && userMessage.trim() != "") {
        const response = await fetch(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chat_id,
              text: message,
            }),
          }
        );
        toast.success("habar telegram botga yuborildi", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("formani toldirib qaytatdan urining", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }

    // Formni tozalash
    setName("");
    setEmail("");
    setUserMessage("");
    setText("");
    setNumber("");
  };
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      console.error("Hatolik: Malumot kiritilmagan!");
      return;
    }

    // Sizga kerakli qo'shimcha amallar
  };

  return (
    <div>
      <div className={`${styles.container}`}>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div>
              <Link className="text-xl font-semibold" to="/home">
                homga qaytish
              </Link>
              <h1 className="text-4xl font-bold my-8">Sotib olish</h1>
              <div className="flex">
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <label className="text-xl font-semibold" htmlFor="name">
                        F.I.SH:
                      </label>
                      <br />
                      <input
                        className="w-72 sm:w-96  md:h-14 border-2 rounded-xl py-3 px-3 md:w-56 "
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="            Ismingiz"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label className="text-xl font-semibold" htmlFor="email">
                        Telfon raqamingiz:
                      </label>
                      <br />
                      <input
                        className="h-14 w-72 sm:w-96  border rounded-xl py-3 px-3 md:w-56"
                        type="number"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="       +998"
                        autoComplete="off"
                        pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
                      />
                    </div>
                  </div>
                  <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
                    <div>
                      <label
                        className="text-xl font-semibold"
                        htmlFor="message"
                      >
                        adressingiz:
                      </label>
                      <br />
                      <input
                        className="w-72 sm:w-96 md:w-56 border rounded-xl resize-none py-3 px-3"
                        id="message"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="    adressingiz"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xl font-semibold">
                        Maxsulot nomi:
                      </label>
                      <input
                        className="w-72 sm:w-96 md:w-56 border rounded-xl resize-none py-3 px-3"
                        type="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="   masxulot nomi"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xl font-semibold">
                      Maxsulot soni:
                    </label>
                    <input
                      className="w-72 sm:w-96 md:w-56 border rounded-xl resize-none py-3 px-3"
                      type="number"
                      id="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="      maxsulot soni"
                    />
                  </div>
                </div>
              </div>
              <button
                className="h-14 bg-[#D87D4A] text-white rounded-lg py-4 px-5 md:ml-32 lg:ml-52 my-5"
                onClick={sendMessage}
              >
                Xabar jo'natish
              </button>
            </div>
            <div className="bg-[#DCFCE7] py-6 px-6 rounded-xl md:h-[350px]  md:mx-5 my-10 lg:w-[450px] xl:w-[500px] lg:h-[300px] md:my-36">
              <h2 className="text-xl font-semibold text-blue-700 text-center pb-2">
                Tolov usullari:
              </h2>
              <p className="text-center pb-4">
                Agarda har qanday mahsulotni harid qilgandan so'ng tolov
                usullari siz holladandek boladi. mahsulotni yetkazib berish
                mutlaqo bepul elitib berish hizmati hamma viloyatlarga mavjud.
              </p>
              <h2 className="text-xl font-semibold text-blue-700 text-center mb-5">
                Murojat Uchun
              </h2>
              <div className="flex items-center space-x-6 justify-center md:px-16">
                <a href="https://t.me/mamarayimovsamandar95" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/_.akbarshookh._?igshid=NGVhN2U2NjQ0Yg=="
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
                <a href="https://instagram.com/_.akbarshookh._?igshid=NGVhN2U2NjQ0Yg=="target="blank" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Forma;
