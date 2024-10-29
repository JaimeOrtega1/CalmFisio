import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../assets/images/logoCalmFisio134x134.png"
import {RiLinkedinFill} from "react-icons/ri"
import { AiFillFacebook,AiOutlineInstagram,AiFillPhone } from 'react-icons/ai'


const Linksredes = [
  {
    path: "https://www.facebook.com/pollito.ortega.503/" , 
    icon: <AiFillFacebook  className='group-hover:text-white w-4 h-5' />
  },
  {

    icon: <AiOutlineInstagram  className='group-hover:text-white w-4 h-5' />,
    path: "https://www.instagram.com/ortega5281/?hl=es"
  },

]

const LinksRapidos01 = [
  {
    path:'/inicio',
    display: 'Inicio'
  },
  
  {
    path:'/servicios',
    display: 'Servicios'
  },

]

const LinksRapidos02 = [
  {
    path:'/doctores',
    display: 'Encuentra un Fisioterapeuta'
  },
 
  {
    path:'/contacto',
    display: 'Contacto'
  }

]

const LinksRapidos03=[
  {
    path: 'tel:+593 96 000 99 88',
    icon: <AiFillPhone  className='group-hover:text-white w-4 h-5' />
  }
]


const Footer = () => {

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
              <img src={logo} alt="" />
              <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'> Desarrollado por Jaime Ortega </p>

              <div className='flex items-center gap-3 mt-4'> 
                {Linksredes.map((link, index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E]
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                {link.icon} 
                </Link>)}
              </div>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Links Rapidos
            </h2>
            <ul>
              {LinksRapidos01.map((item, index) => <li key={index} className='mb-4' ><Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
              {item.display}
              </Link>
              </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Yo quiero
            </h2>
            <ul>
              {LinksRapidos02.map((item, index) => <li key={index} className='mb-4' ><Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
              {item.display}
              </Link>
              </li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Contactanos
            </h2>
            <ul>
              {LinksRapidos03.map((item, index) => <li key={index} className='mb-4' ><Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
              {item.icon} 
              </Link>
              </li>)}
            </ul>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer