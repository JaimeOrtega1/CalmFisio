import React from 'react'
import fotofisioinicio from "../assets/images/fisio-img01home.jpeg"
import inicioFisio2 from "../assets/images/Fisio-home02.jpeg"
import inicioFisio3 from "../assets/images/Fisio-home03.jpeg"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import iconoavatar from "../assets/images/avatar-icon.png"
import Preguntasimg from '../assets/images/pregfrec.png'
import videoicon from "../assets/images/video-icon.png"
import virtualagenda from "../assets/images/virtualagenda470x470.png"
import { Link } from 'react-router-dom'
import {BsArrowRight} from "react-icons/bs"
import Acercade from '../components/AcercadeNosotros/Acercade'
import ListadeServicios from '../components/Servicios/ListadeServicios'
import ListaFisios from '../components/Fisioterapeutas/ListaFisios'
import ListaPreguntas from '../components/PreguntasFrec/ListaPreguntas'

const Home = () => {
  return <>
  {/*  Seccion pagina Inicial - Parte arriba   */}
  
  <section className="frase__seccion pt-[60px] 2xl:h-[800px]" >
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between' >

        { /*  Contenido de promocion  */}

        <div>

          <div className='lg:w-[570px]'>
            <h1 className= 'text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]' >Recupera tu bienestar y movimiento.
            </h1>
            <p className='text__para'>
            
              La fisioterapia es una disciplina de la salud que trata y previene lesiones físicas mediante técnicas manuales, ejercicios terapéuticos y modalidades físicas. 
              Los fisioterapeutas evalúan y desarrollan programas de tratamiento personalizados para problemas musculoesqueléticos, neurológicos y cardiorrespiratorios.

            </p>

            <Link to="/servicios">
              <button    className='btn' >Registre su cita aqui</button>
            </Link>
            

            { /*  Contenido de promocion  */}
          </div  >

          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
          lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading[56px] lg:text-[36px] lg:leading-[56px] font-[700]
              text-headingColors'> +3 </h2>
              <span className='w-[80px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Años de experiencia</p>
            </div>

            <div>
              <h2 className='text-[36px] leading[56px] lg:text-[36px] lg:leading-[56px] font-[700]
              text-headingColors'> 100% </h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Clientes Satisfactorios</p>
            </div>


          </div>

        </div>

        { /*  Contenido de promocion  */}

        <div className='flex justify-end mx-auto gap-[30px]'>
          <div className='rounded-[30px] overflow-hidden'>
            <img src={fotofisioinicio} alt="" />
          </div>

          <div className='mt-[30px] '>
            <img src={inicioFisio2} alt=""  className=" rounded-[30px] w-full mb-[30px]"/>
            <img src={inicioFisio3} alt="" className='rounded-[30px] w-full' />

          </div>

        </div>



      </div>

    </div>

  </section>

  {/*  Seccion pagina Inicial - Parte final   */}
  <section>
    <div className="container">
      <div className='lg:w-[1000px] mx-auto'>
        <h2 className='heading text-center'>
         Brindando los mejores servicios para su rehabilitacion
        </h2>
        <p className='text__para text-center'>
          Atencion para todos.Ofrecemos atencion de fisioterapia experta e inigualable
        </p>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
      lg:mt-[55px]'>

        <div className='py-[30px] px-5' >
          <div className='flex items-center justify-center'>
            <img src={icon01} alt="" />

          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Encuentra un Fisioterapeuta</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Trabajaremos arduamente para seguir mejorando
            </p>

            <Link to="/doctores" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>

        <div className='py-[30px] px-5' >
          <div className='flex items-center justify-center'>
            <img src={icon02} alt="" />

          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>¿Donde nos encontramos?</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Trabajaremos arduamente para seguir mejorando
            </p>

            <Link to="/doctores" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>

        <div className='py-[30px] px-5' >
          <div className='flex items-center justify-center'>
            <img src={icon03} alt="" />

          </div>

          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Reserva tu cita</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Trabajaremos arduamente para seguir mejorando
            </p>

            <Link to="/doctores" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
            mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>

      </div>

    </div>
    
  </section>
  
  <Acercade/>
  
  {/* Seccion de Servicios  */}
  <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>
          Nuestros servicios
        </h2>
        <p className='text__para text-center'>
          Atencion de primera clase para todos. con tratamientos personalizados y expertos, comprometidos con la excelencia y el bienestar integral de cada paciente

        </p>
      </div>

      <ListadeServicios/>


    </div>
  </section>
  {/* Final Seccion de Servicios  */}

  {/* Seccion de caracteristicas */}

  <section>
    <div className="container">
      <div className="flex item-center justify-between flex-col lg:flex-row">
          {/* Contenido de caracteristicas  */}
        <div className='xl:w-[670px]'>
          <h2 className="heading">Reciba tratamiento en cualquier momento</h2>

          <ul className='pl-4'>
            <li className='text__para'>1. Programe su cita directamente</li>
            <li className="text__para">2. Busque a su fisioterapeuta y comuniquese directamente con el/ella</li>
            <li className="text__para">3.Vea a nuestro personal que estan aceptando nuevos pacientes. <br />
            Use la herramienta para coordinar una hora para su cita
            </li>
          </ul>
          
        </div>  

      {/* Imagen de caracteristicas  */}
      <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
        <img src={virtualagenda} className='w-3/4' alt="" />

        <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
        md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]'>

          <div className="flex items-center justify-between">
            <div className='flex items-center gap-[6px] lg:gap-3'>
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
              font-[600]'>
              Viernes, 24 
              </p>
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
              font-[400]'>
                10:00 AM
              </p>
            </div>

            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-purpleColor rounded
            py-1 px-[6px] lg:py-3 lg:px-[9px]'>
              <img src={videoicon} alt="" />
            </span>
          </div>

        <div className='w-[65px] lg:w-[90px] bg-[#4E8397] py-1 px-2 lg:py-[6px] lg:px-[8px] 
        text-[8px] leading-[8px] text-center lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
          Consulta
        </div>

        <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
          <img src={iconoavatar} alt="" />
          <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'> Jaime Ortega  </h4>
        </div>
        
        </div>
      </div>
      </div>
    </div>
  </section>
  {/* Fin - Seccion de caracteristicas */}

  
  {/* Presentar a fisios */}
  <div className="container">
      <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Nuestros Fisioterapeutas
            </h2>
            <p className='text__para text-center'>
              Atencion de primera clase para todos. con tratamientos personalizados y expertos, comprometidos con la excelencia y el bienestar integral de cada paciente

            </p>
      </div>
      <ListaFisios/>

  </div>
  
  {/* Final- Presentar a fisios */}


  {/* Preguntas Frecuentes */}

  <section>
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className='w-1/2 hidden md:block'>
            <img src={Preguntasimg} alt="" />
          </div>

        <div className='w-full md:w-1/2'>
          <h2 className='heading'> Las preguntas mas frecuentes de nuestros clientes</h2>
            <ListaPreguntas/> 
        </div>

          
      </div>

    </div>
  </section>
  {/* Final - Preguntas Frecuentes */}

  

  </>
}

export default Home