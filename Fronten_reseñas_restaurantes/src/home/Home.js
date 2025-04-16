import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import Seccion from '../resenaS/Seccion';

import plato1 from '../img/plato1.jpg';
import plato2 from '../img/plato2.jpg';
import plato3 from '../img/plato3.jpg';
import plato4 from '../img/plato4.jpg';
import plato5 from '../img/plato5.jpg';
import plato6 from '../img/hero.png';
import plato7 from '../img/bg-hero.jpg';

function Home() {
  const navigate = useNavigate();

 
    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleRegisterClick = () => {
      navigate('/registro');
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
                       
                        <li class="nav-item"><a class="nav-link" href="#reseñas">Reseñas</a></li>
                        
                    <>
                        <li className="nav-item">
                            <button className="nav-link btn-link " onClick={handleLoginClick}>
                                Inicio de sesión
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn-link " onClick={handleRegisterClick}>
                                Registrarse
                            </button>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#"></a></li></>
                
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
                        <a class="btn btn-primary" href="#reseñas">Ver más</a>
                    </div>
                </div>
            </div>
        </header>
       
       
      
        <section class="projects-section bg-light" id="reseñas">
            <div class="container px-4 px-lg-5">
              
                
          
                  <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                     <div class="col-xl-8 col-lg-8">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Restaurante Margaritas</h4>
                            <div class="font-weight-bold">Comentarios:</div>
                            <p class="text-black-50 mb-0">El servicio fue excelente y la comida deliciosa.</p>
                            <div >
                              <span class="font-weight-bold  ">Calificación:</span> 
                              <span class="text-black-50 mb-0 "> 4.5/5</span>
                            </div>
                              <div >
                                <span class="font-weight-bold ">Fecha de visita:</span> 
                                <span class="text-black-50 mb-0 ">2024-05-06</span>
                              </div>
                        </div>
                      </div>
                    <div class="col-xl-4 col-lg-4"><img class="img-fluid mb-3 mb-lg-0" src={plato1} alt="..." /></div>
                  </div>
                  
                  <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                      <div class="col-xl-8 col-lg-8">
                          <div class="featured-text text-center text-lg-left">
                                <h4>Restaurante Colores</h4>
                                <div class="font-weight-bold">Comentarios:</div>
                                <p class="text-black-50 mb-0">El servicio fue excelente y la comida deliciosa.</p>
                                <div >
                                  <span class="font-weight-bold  ">Calificación:</span> 
                                  <span class="text-black-50 mb-0 "> 4.5/5</span>
                                </div>
                                  <div >
                                    <span class="font-weight-bold ">Fecha de visita:</span> 
                                    <span class="text-black-50 mb-0 "> 2024-05-06</span>
                                  </div>
                          </div>
                      </div>
                           <div class="col-xl-4 col-lg-4"><img class="img-fluid mb-3 mb-lg-0" src={plato2} alt="..." />
                    
                           </div>
                  </div>
               
              
            <Seccion defaultImages={[plato3, plato4, plato5,plato6,plato7,]} />
            
             
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

export default Home;
