
const PanelLateral = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md' >
        <div className="flex items-center justify-between">
            <p className='text__para mt-0 font-semibold'>
                Precio de consulta
            </p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold '>
                $40
            </span>
        </div>
        <div className="mt-[30px]">
            <p className='text__para mt-0 font-semibold text-headingColor'>
                Citas Disponibles: 
            </p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        Lunes
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        1:00 PM - 6:30 PM
                    </p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        Martes
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        1:00 PM - 6:30 PM
                    </p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        Miercoles
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        1:00 PM - 6:30 PM
                    </p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        Jueves
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        1:00 PM - 6:30 PM
                    </p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        Viernes
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold' >
                        1:00 PM - 6:30 PM
                    </p>
                </li>

            </ul>
        </div>
        <button className='btn px-2 w-full rounded-md' >Reservar Cita</button>
    </div>
  )
}

export default PanelLateral 