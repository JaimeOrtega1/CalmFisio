
import {Fisioterapeuta} from "./../../assets/data/Fisios"
import CartadeFisios from "./CartadeFisios"

const ListaFisios = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
    lg:mt-[55px]'>
        {Fisioterapeuta.map((Fisio)=> <CartadeFisios key={Fisio} Fisio={Fisio} />)}
        
    </div> 
    )
  
}

export default ListaFisios