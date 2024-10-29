import React, { useState } from 'react'
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import useFetchData from '../../hooks/useFetchData';



const Dashboard = () => {

  
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctores/perfil/me`);

  console.log(data)
  const [tab,setTab] = useState()

  return (
    <section className="max-w-[1170px] px-5 mx-auto">
      <div>
        
            <div  className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]" >
              <Tabs/>
            </div>
      </div>
    </section>
  );
}

export default Dashboard;
