import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import { authContext } from "../contexto/authContexto.jsx";
import HashLoader from 'react-spinners/HashLoader.js';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useContext(authContext);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();
            console.log(result); // Agregar esta línea para verificar los resultados

            if (!res.ok) {
                throw new Error(result.message);
            }

            dispatch({
                type: 'LOGIN_SUCCESS',
                user: result.data,
                token: result.token,
                role: result.role
            });

            toast.success(result.message);
            navigate('/inicio');
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false); // Asegúrate de que esto esté en finally
        }
    };

    return (
        <section className='px-5 lg:px-0'>
            {loading ? (
                <div>Loading...</div> // Muestra un mensaje de carga mientras se espera
            ) : (
                <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
                    <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                        Hola! <span className='text-primaryColor'>Bien</span>venido
                    </h3>
                    <form className='py-4 md:py-0' onSubmit={submitHandler}>
                        <div className='mb-5'>
                            <input
                                type="email"
                                placeholder='Ingresa tu correo'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                                cursor-pointer'
                                required
                            />
                        </div>

                        <div className='mb-5'>
                            <input
                                type="password"
                                placeholder='Contrasena'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                                cursor-pointer'
                                required
                            />
                        </div>

                        <div className='mt-7'>
                            <button type='submit' className='w-full bg-primaryColor text-white text-[18px]
                            leading-[30px] rounded-lg px-4 py-3'>{ loading ? <HashLoader size={25} color="#fff" /> : 'Iniciar Sesion'}</button>
                        </div>

                        <p className='mt-5 text-textColor text-center'>
                            ¿No tienes una cuenta? <Link className='text-primaryColor font-medium
                            ml-1' to='/registrarse'>Registrate!</Link>
                        </p>
                    </form>
                </div>
            )}
        </section>
    );
};

export default Login;