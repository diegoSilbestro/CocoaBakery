import React from 'react'
import style from '../styles/Contacto.css'


function Contacto() {
   return (
     

         <div className='container'>
            <div className='solapa solapa-roja'>
               <h1 id='Contacto'>Contacto</h1>
            </div>
            <div className='br-25'></div>
            <div className='acenter'>
               <h3>Por consultas o comentarios generales escribinos a:</h3>
            </div>
            <div className='br-25'></div>
            <h2 className='mail'>
               <a href="mailto:info@cocoabakery.com.ar">info@cocoabakery.com.ar</a>
            </h2>
            <div className='br-25'></div>
            <div id='contacto' style={style}>
               <form className='w-100'>
                  <div className="row mb-3">
                     <label htmlFor="inputName3" className="col-sm-2 col-form-label">Nombre</label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName3" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label htmlFor="inputApellido3" className="col-sm-2 col-form-label">Apellido</label>
                     <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputApellido3" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                     <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                     </div>
                  </div>
                  <div className="row mb-3">
                     <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                           <label htmlFor='comments' className='col-sm-2 col-form-label'>Comentarios</label>
                           <div className='formulario-area'>
                              <textarea className="form-control" id='comments'/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Enviar</button>
                  <div className="formulario-ctc-bottom">
                  </div>
               </form>
               
            </div>
         </div>
     
   )
}

export default Contacto;

