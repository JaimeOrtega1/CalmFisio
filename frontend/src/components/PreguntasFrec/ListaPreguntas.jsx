import {PreguntasFrecuentes} from './../../assets/data/PreguntasFrec'
import ItemPreguntas from './ItemPreguntas'

const ListaPreguntas = () => {
  return (
    <ul className='mt-[38px]'>
        {PreguntasFrecuentes.map((pregunta, index) => <ItemPreguntas pregunta={pregunta} key={index} />)}
    </ul>
  )
}

export default ListaPreguntas