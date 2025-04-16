import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../home/Home.css';

import plato3 from '../img/plato3.jpg';
import plato4 from '../img/plato4.jpg';
import plato5 from '../img/plato5.jpg';
import plato7 from '../img/bg-hero.jpg';

function MisResenas() {
  const navigate = useNavigate();
  const [restaurantes, setRestaurantes] = useState([]);
  const userName = localStorage.getItem('nombre');
  const defaultImages = [...[plato3, plato4, plato5, plato7]];
  const token = localStorage.getItem('token');
  const idusuario = localStorage.getItem('usuarioId');
  
  useEffect(() => {

        const fetchResenas = async () => {
            try {
              const response = await axios.get(`http://localhost:8552/api/resena/obteneridUsuario/${idusuario}`, {
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
              });
              setRestaurantes(response.data);
              console.error(restaurantes)
            } catch (error) {
              console.error(`Error al obtener los servicios:`, error);
            }
          };
        
          fetchResenas();
    
}, []);







  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('usuarioId');

    navigate('/');
    

};
const handleEliminar = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8552/api/resena/borrar/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.status === 200) {
        setRestaurantes(restaurantes.filter((restaurante) => restaurante._id !== id));
      } else {
        console.error(`Error al eliminar la reseña: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error al eliminar la reseña: ${error}`);
    }
  };


  const handleActualizar = (id) => {
    navigate(`/actulizarResenas/${id}`);
  };
  const handleCrear = () => {
  
    navigate(`/crearResenas`);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand"id='inicio' href="#page-top">Reseñas de resturantes</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                       
                        <li class="nav-item"><a class="nav-link" href="#misreseñas">Mis Reseñas</a></li>
                        
                    <>
                        <li className="nav-item">
                            <span className="nav-link">Hola, {userName}</span>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link btn-link " onClick={handleLogoutClick}>
                                Cerrar sesión
                            </button>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#"></a></li>
                    </>
                  </ul>
      
                </div>
            </div>
        </nav>
        
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Opinión y sabor</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">¡Vamos a explorar los mejores lugares de la ciudad!.</h2>
                        
                        <a class="btn btn-primary" onClick={(handleCrear) }>Crear reseña</a>
                    </div>
                </div>
            </div>
        </header>
       
        <section class="projects-section bg-light" id="reseñas">
            <div class="container px-4 px-lg-5">
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
                                    <div>
                                    <button
                                        onClick={() => handleEliminar(restaurante._id)}
                                        className="btn btn-danger btn-ss"
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        onClick={() => handleActualizar(restaurante._id)}
                                        className="btn btn-primary btn-ss"
                                    >
                                        Actualizar
                                    </button>

                                    </div>
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
        </section>










        <footer class="footer bg-light mt-auto py-3">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <p class="mb-0">&copy; 2024 Opinin y sabor</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 text-lg-end">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item "><a href="#">Privacidad</a></li>
                    <li class="list-inline-item"><a href="#">Terminos y condiciones</a></li>
                    <li class="list-inline-item"><a href="#">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
      
    </div>
   
  );
}

export default MisResenas;
