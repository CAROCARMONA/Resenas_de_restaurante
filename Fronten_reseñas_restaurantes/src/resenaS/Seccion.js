import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../home/Home.css';

const Seccion = ({ defaultImages }) => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchResenas = async () => {
      try {
        const response = await axios.get(`http://localhost:8552/api/resena/obtener`);
        setRestaurantes(response.data);
        console.error(restaurantes)
      } catch (error) {
        console.error(`Error al obtener los servicios:`, error);
      }
    };

    fetchResenas();
  }, []);

  return (


     

   
    <div>
         {restaurantes.map((restaurante, index) => (
    <div  key={index} className="row gx-0 mb-4 mb-lg-5 align-items-center">
     
        <div className="col-xl-8 col-lg-8">
                    <div className="featured-text text-center text-lg-left">
                                    <h4>{restaurante.nombreRestaurante}</h4>
                        <div className="font-weight-bold">Comentarios: </div>
                        <p className="text-black-50 mb-0">{restaurante.observaciones}</p>
                        <div>
                        <span className="font-weight-bold">Calificación: </span>
                        <span className="text-black-50 mb-0">{restaurante.calificacion}/5</span>
                        </div>
                        <div>
                        <span className="font-weight-bold">Fecha de visita: </span>
                        <span className="text-black-50 mb-0">{restaurante.fechaVisita}</span>
                        </div>
                    </div>
        </div> 
         <div class="col-xl-4 col-lg-4">

              <img
                className="img-fluid mb-3 mb-lg-0"
                src={restaurante.imagen || defaultImages[index % defaultImages.length]}
                alt="..."
              />
        </div>
       
    
    </div>

))}

    </div>

  );
};

export default Seccion;