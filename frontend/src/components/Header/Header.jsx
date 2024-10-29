import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logoCalmFisio134x134.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../contexto/authContexto';

const navLinks = [
    { path: '/inicio', display: 'Home' },
    { path: '/doctores', display: 'Encuentra un Fisioterapeuta' },
    { path: '/servicios', display: 'Servicios' },
    { path: '/contacto', display: 'Contacto' },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, role, token } = useContext(authContext);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className='header flex items-center' ref={headerRef}>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem] ">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-purpleColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-purpleColor'}>
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        {
                            token && user ? (
                                <div>
                                    <Link to={`${role === 'doctor' ? '/doctores/perfil/me' : '/users/perfil/me'}`}>
                                        <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                            <img src={user?.photo} className="w-full rounded-full" alt="" />
                                        </figure>
                                        
                                    </Link>
                                </div>
                            ) : (
                                <Link to='/login'>
                                    <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                                        Iniciar Sesion
                                    </button>
                                </Link>
                            )
                        }
                        <span className='md:hidden' onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
