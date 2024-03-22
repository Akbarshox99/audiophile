import React, { useEffect } from 'react'
import { styles } from '../styles'
import audiy from '../assets/img/audiy.png'
import { Link, NavLink } from 'react-router-dom'
import fakebook from '../assets/img/fakebook.png'
import twinter from '../assets/img/twinter.png'
import instagram from '../assets/img/instagram.png'

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='bg-black'>
      <div className={`${styles.container}`}>
        <div className='py-10'>
          {/* audiy */}
          <div className='flex flex-col md:flex-row justify-between'>
            <Link to='/home'>
            <img className='mb-4 w-32 h-5' src={audiy} alt="" />
            </Link>
            <nav>
              <ul className='flex flex-col space-y-3 mb-3 sm:flex-row sm:space-y-0 sm:space-x-3 md:px-10 xl:flex space-x-0 text-white xl:pl-[600px]'>
                <li className='text-sm font-semibold'>
                  <NavLink to="/home">HOME</NavLink>
                </li>
                <li className='text-sm font-semibold'>
                  <NavLink to="/headphones">HEADPHONES</NavLink>
                </li>
                <li className='text-sm font-semibold'>
                  <NavLink to="/speakers">SPEAKERS</NavLink>
                </li>
                <li className='text-sm font-semibold'>
                  <NavLink to="/earphones">EARPHONES</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          {/* audiy tugadi */}
          {/* past */}
          <div className='mb-10'>
            <p className='text-white opacity-50 w-80 md:w-[450px] lg:w-[500px]'>
              Audiofil - bu sizning audio ehtiyojlaringizni qondirish uchun hammasi bir joyda.
              Biz musiqa ixlosmandlari va ovoz mutaxassislaridan iborat kichik jamoamiz,
              ular sizga shaxsiy audiodan maksimal darajada foydalanishga yordam berishga intiladi. 
              Keling va demo ob'ektimizga tashrif buyuring - biz haftada 7 kun ochiqmiz.
            </p>
            <div className='flex justify-between pt-10'>
              <div className='flex space-x-6'>
                <a href="https://instagram.com/_.akbarshookh._?igshid=NGVhN2U2NjQ0Yg==" target='blank' rel='noopener noreferrer'>
                  <img className='w-10 h-10' src={fakebook} alt="" />
                </a>
                <a href="https://instagram.com/_.akbarshookh._?igshid=NGVhN2U2NjQ0Yg==" target='blank' rel='noopener noreferrer'>
                  <img className='w-10 h-10' src={twinter} alt="" />
                </a>
                <a href="https://instagram.com/_.akbarshookh._?igshid=NGVhN2U2NjQ0Yg==" target='blank' rel='noopener noreferrer'>
                  <img className='w-10 h-10' src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* past tugadi */}
          {/* p */}
          <div>
            <p className='text-white opacity-50'>
              Mualliflik huquqi 2021. Barcha huquqlar himoyalangan
            </p>
          </div>
          {/* p tugadi */}
        </div>
      </div>
    </div>
  )
}

export default Footer