import React, { useContext } from 'react';


const Proyecto = ({ proyecto }) => {


	// Función para agregar el proyecto actual
	const seleccionarProyecto = id => {
		// proyectoActual(id); // Fijar un proyecto actual
		// obtenerTareas(id); // Filtrar las tareas cuando se de click
	}

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => seleccionarProyecto(proyecto._id)}
			>{proyecto.nombre} </button>
		</li>
	);
}

export default Proyecto;