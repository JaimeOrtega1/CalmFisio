import React from 'react'
import {FormatoFecha} from "../../utils/FormatoFecha"

const AcercadeDoctores = () => {
  return ( <div>
    <div >
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center
        gap-2  " > Acerca de 
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Andrea Ortega
        </span>
        </h3>
        <p className="text__para">
            Andrea Ortega es una fisioterapeuta en el área de la salud, con un pasión por la mejora de la salud y la promoción de la calidad de vida.
            Andrea Ortega es una fisioterapeuta con un promedio de 4.5 estrellas y ha trabajado en 272 consultas. Sus especialidades incluyen la terapia de la masa corporal, la rehabilitación y la ayuda en la salud mental. Además, Andrea Ortega cuenta con un equipo de profesionales calificados y comprometidos con su cliente.
        </p>
    </div>
    <div className='mt-12' >
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold' >
            Educacion:
        </h3>

        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {FormatoFecha("8-13-2024")} - {FormatoFecha("2-13-2018")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Licentiatura en Fisioterapia
                    </p>
                    
                </div>
                <div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Universidad Estatal de Milagro, Milagro
                    </p>
                </div>
            </li>
        </ul>
    </div>



  </div>
  )
}

export default AcercadeDoctores