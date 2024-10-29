import React,{useState} from 'react'
import ImagenFisio from "../../assets/images/fisio-img001.jpeg"
import StarIcon from "../../assets/images/Star.png"
import AcercadeDoctores from './AcercadeDoctores'
import PanelLateral from './PanelLateral'



const DetalleDoctores = () => {

  const [tab,setTab] = useState("Acercade")

  return <section>
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-2 gap-[50px]'>
        <div className='md:cols-span-1'>
          <div className='flex items-center gap-5'>
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={ImagenFisio} alt="" className='w-full  rounded-lg' />
            </figure>

            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 
              text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Licenciada </span>

              <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>Andrea Ortega</h3>

              <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-headingColor' >
                  <img src={StarIcon} alt="" />
                  4.5
                  
                </span>
                <span className='text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-textColor'>
                  (272)
                </span>
              </div>

              <p className='text__para text-[14px] leading-6 md:text-[15px]
              lg:max-w-[500px]'>
                De las mejores fisioterapeutas, Andrea Ortega es una muy buena fisioterapeuta en la comunidad. 
                
              </p>

            </div>
            


          </div>

          <div className='mt-[50px] border-b border-solid border[#0066ff34]' >
          <button
              onClick={() => setTab('Acercade')} 
              className={`${tab === 'Acercade' ? 'border-b border-solid border-purpleColor text-headingColor' : 'border-b border-solid border-purpleColor text-gray-500'} py-2 px-5 mr-5 text-[15px] leading-7 font-semibold`}
          >
              Acerca de
          </button>


            


        
          </div>

          <div className='mt-[50px]'>
              {tab === "Acercade" ? <AcercadeDoctores /> : null}
          </div>
        </div>

        <div>
          <PanelLateral />

        </div>
      </div>

      
    </div>
  </section>
}

export default DetalleDoctores