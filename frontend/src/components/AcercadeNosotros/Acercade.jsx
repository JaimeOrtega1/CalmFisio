import React from 'react'
import AcercaDe from "../../assets/images/AcercaNosotros470x470.png"
import { Link } from 'react-router-dom'

const Acercade = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*    Imagen para Acerca de nosotros      */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 lg:order-1'>
                <img src={AcercaDe} alt="" />

                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]'>
                    <img src="" alt="" />
                </div>
            </div>

            {/*    Contenido para Acerca de nosotros      */}

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>
                    Comprometidos con tu bienestar y recuperacion integral
                </h2>
                <p className='text__para'>
                Nos dedicamos a ofrecer servicios de fisioterapia y rehabilitación física con un enfoque centrado en el paciente, donde nuestra fisioterapeuta, con 3 años de experiencia, asegura una atención personalizada. En un ambiente acogedor y profesional, priorizamos siempre la calidad del tratamiento y el bienestar de nuestros pacientes.
                </p>

                <p className="text__para">
                Nos esforzamos cada día por dar lo mejor de nosotros, enfocándonos en cuidar a nuestros pacientes y mirando siempre hacia adelante, no en lo que hemos logrado, sino en lo que podemos alcanzar mañana. 
                Nuestro compromiso es seguir proporcionando lo mejor, con dedicación y excelencia.
                </p>

                

            </div>
            
        </div>
    </div>
  </section>
}

export default Acercade