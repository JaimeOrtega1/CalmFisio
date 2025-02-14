import { useState } from 'react';
import registrarImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import uploadImagetoCloudinary from "../utils/uploadCloudinary.js";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Singup = () => {
    const [SelectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: SelectedFile,
        gender: '',
        role: 'paciente', // Valor por defecto
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        const data = await uploadImagetoCloudinary(file);
        
        setPreviewURL(data.url);
        setSelectedFile(data.url);
        setFormData({ ...formData, photo: data.url });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/Registrarse`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            setLoading(false);
            toast.success(message);
            navigate('/login');

        } catch (err) {
            toast.error(err.message);
            setLoading(false);
        }
    }

    return (
        <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='hidden lg:block bg-white rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={registrarImg} alt="" className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Crear una <span className='text-primaryColor'>Cuenta </span>
                        </h3>

                        <form onSubmit={submitHandler}>
                            <div className='mb-5'>
                                <input
                                    type="text"
                                    placeholder='Nombre Completo'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                                    required
                                />
                            </div>
                            <div className='mb-5'>
                                <input
                                    type="email"
                                    placeholder='Ingrese su correo electronico'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
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
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5 flex items-center justify-between'>
                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Eres tú:
                                    <select name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="paciente">Paciente</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </label>
                                <label className='text-headingColor font-bold text-[16px] leading-7'>
                                    Género:
                                    <select name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                                        <option value="">Selecciona</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </label>
                            </div>

                            <div className='mb-5 flex items-center gap-3'>
                                {SelectedFile && (
                                    <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                                        <img src={previewURL} alt="" className='w-full rounded-full' />
                                    </figure>
                                )}

                                <div className='relative w-[100px] h-[50px]'>
                                    <input
                                        type="file"
                                        name='foto'
                                        id="customFile"
                                        onChange={handleFileInputChange}
                                        accept='.jpg, .png'
                                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                    />

                                    <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                                        Subir Foto
                                    </label>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <button disabled={loading} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                                    {loading ? <HashLoader size={35} color='#ffffff' /> : 'Crear Cuenta'}
                                </button>
                            </div>

                            <p className='mt-5 text-textColor text-center'>
                                ¿Ya tienes una cuenta? <Link className='text-primaryColor font-medium ml-1' to='/login'>Inicia sesión</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Singup;
