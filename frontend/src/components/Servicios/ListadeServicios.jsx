
import {Servicios} from "../../assets/data/Servicios"
import CartadeServicios from './CartadeServicios'

const ListadeServicios = () => {
  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
  lg:mt[55px]'>
    {Servicios.map((item,index)=> <CartadeServicios item={item} index={index} key={index}/>)}
  </div>
}

export default ListadeServicios