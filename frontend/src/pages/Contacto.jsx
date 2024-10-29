

const Contacto = () => {
  return <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center' >Contactenos</h2>
      <p className='mb-8 lg:mb-16 font-ligth text-center text__para' >
        ¿Tienes un problema técnico? ¿Quieres enviar comentarios sobre una opcion mal hecha? Háganos saber
      </p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label' >Tu correo electronico </label>
          <input type="email" id='email' placeholder='ejemplo@gmail.com' className='form__input mt-1' />
        </div>

        <div>
          <label htmlFor="Caso" className='form__label' > ¿Que problema tienes? </label>
          <input type="text" id='Caso' placeholder='déjanos saber cómo podemos ayudarte' className='form__input mt-1' />
        </div>

        <div className="sm:col-span-2" >
          <label htmlFor="mensaje" className='form__label' >Tu mensaje </label>
          <textarea rows="6" type="text" id='mensaje' placeholder='Deja tu comentario...' className='form__input mt-1' />
        </div>

        <button type="submit" className="btn rounded sm:w-fit" >Enviar</button>
      </form>



    </div>
  </section>
}

export default Contacto