import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
// import AlertaContext from '../../context/alertas/alertaContext';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {
  // Extrar proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    // si hay un error
    // if (mensaje) {
    // 	mostrarAlerta(mensaje.msg, mensaje.categoria);
    // }

    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  // revisar si proyectos tiene contenido
  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {/* {alerta ? (<div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>) : null} */}

      {proyectos.map((proyecto) => (
        <Proyecto Key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
