import React, { useState } from 'react';
import '../login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock,faCommentAlt,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const CrearResena = () => {
  const navigate = useNavigate();
  const [nombreRestaurante, setNombreRestaurante] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [fechaVisita, setFechaVisita] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
 
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const idUsuario = localStorage.getItem('usuarioId');
    console.error({ idUsuario ,nombreRestaurante, calificacion, fechaVisita, observaciones});
    // Aquí puedes agregar la lógica para enviar la solicitud al backend
    try {
      // Realiza la solicitud al backend
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8552/api/resena/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ idUsuario ,nombreRestaurante, calificacion, fechaVisita, observaciones }), 
      });

      // Maneja la respuesta del backend
      if (response.ok) {
       
        setShowModal(true);
      } else {
        // Si la solicitud no fue exitosa, maneja el error
        console.error('Error al crear reseña:', response.statusText);
        setError('La reseña no se creó correctamente. Por favor, inténtelo de nuevo.');
        // Puedes mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
     
      // Puedes mostrar un mensaje de error al usuario
    }

   
  };
  const handleModalClose = () => {
    setShowModal(false);
     
      navigate('/misResenas');
    
  }
  return (
    <div className="wrapper bg-white">
      <div className="h2 text-center">Opinión y sabor</div>
     
      <div className="h4 text-muted text-center pt-2">Ingrese sus datos</div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="pt-3" onSubmit={handleSubmit}>
        <div className="form-group py-2">
          <div className="input-field d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="p-2" />
            <input type="text" placeholder="Ingrese el nombre del restaurante" required className="form-control" value={nombreRestaurante} onChange={(e) => setNombreRestaurante(e.target.value)} />
          </div>
        </div>
        <div className="form-group py-2">
          <div className="input-field d-flex align-items-center">
            <FontAwesomeIcon icon={faStarHalfAlt} className="p-2" />
            <input type="number" placeholder="Ingrese la calificación (1-5)" required className="form-control" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} />
          </div>
        </div>
        <div className="form-group py-2">
          <div className="input-field d-flex align-items-center">
            <FontAwesomeIcon icon={faClock} className="p-2" />
            <input type="date" placeholder="Ingrese la fecha de visita" required className="form-control" value={fechaVisita} onChange={(e) => setFechaVisita(e.target.value)} />
          </div>
        </div>
        <div className="form-group py-2">
          <div className="input-field d-flex align-items-center">
            <FontAwesomeIcon icon={faCommentAlt} className="p-2" />
            <textarea placeholder="Ingrese sus observaciones o comentarios" required className="form-control" value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-block btn-primary">Crear reseña</button>
        </div>
        {showModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="wrapper bg-white">
            <p>Se ha creado correctamente.</p>
          
            <div className="d-flex justify-content-center align-items-center">
             <button onClick={handleModalClose} className="btn btn-block btn-primary">
              Aceptar
            </button>
            </div>
          </div>
        </div>
      )}
      
      </form>
    </div>
  );
};

export default CrearResena;