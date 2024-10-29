import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import CartadeFisios from "./../../components/Fisioterapeutas/CartadeFisios";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyReservas = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/citas/mi-cita`);
  console.log("Appointments:", appointments); // Verifica si los datos se reciben correctamente

  return (
    <div>
      
    </div>
  );
};

export default MyReservas;
