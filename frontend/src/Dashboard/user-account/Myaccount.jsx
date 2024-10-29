import { useContext, useState } from 'react';
import { authContext } from "./../../contexto/authContexto";

import MyReservas from './MyReservas';
import Perfil from './Perfil';
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from '../../config';
import Loading from './../../components/Loader/Loading';
import Error from './../../components/Error/Error';

const Myaccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('Reservas');
  const { data: userData, loading, error } = useFetchData(`${BASE_URL}/users/perfil/me`);

  console.log(userData, 'userData'); // Verifica si los datos se están recibiendo

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <Loading />}

        {error && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className='pb-[50px] px-[30px] rounded-md'>
              <div className='flex items-center justify-center'>
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                  <img src={userData.photo} alt="" className='w-full h-full rounded-full' />
                </figure>
              </div>

              <div className='text-center mt-4'>
                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{userData.name}</h3>
                <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.email}</p>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                  Lesiones: 
                  <span className='ml-2 text-headingColor text-[18px] leading-8'>{userData.Lesions}</span>
                </p>
              </div>

              <div className='mt-[50px] md:mt-[100px]'>
                <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>
                  Cerrar Sesion 
                </button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Borrar Cuenta</button>
              </div>
            </div>

            <div className='md:col-span-2 md:px-[30px]'>
              <div>
                {/* <button 
                  onClick={() => setTab('Reservas')}
                  className={`${tab === 'Reservas' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-6 border border-solid border-primaryColor`}
                >
                  Mis reservas
                </button> */}

                <button 
                  onClick={() => setTab('Ajustes')}
                  className={`${tab === 'Ajustes' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-6 border border-solid border-primaryColor`}
                >
                  Ajustes de Perfil
                </button>
              </div>

              <div>
                {tab === 'Reservas' && <MyReservas />}
                {tab === 'Ajustes' && <Perfil user={userData} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Myaccount;
