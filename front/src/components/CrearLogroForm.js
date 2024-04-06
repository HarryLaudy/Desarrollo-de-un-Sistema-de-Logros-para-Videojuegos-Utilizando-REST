import React from "react";
import axios from "axios";
import '../style/form.css';

const CrearLogroForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const logroData = {
      logro_id: formData.get("logro_id"),
      jugador_id: formData.get("jugador_id"),
      progreso: formData.get("progreso"),
      descripcion: formData.get("descripcion"),
    };

    try {
      const response = await axios.post("/api/logros/crear", logroData);
      console.log("Logro creado correctamente", response.data);
      // add pop-up message : 
      alert('Logro creado correctamente');
    } catch (error) {
      console.error("Error al crear el logro", error);
    }
  };

  return (
    <div className="crear-logro-form">
      <h2>Crear Nuevo Logro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="logro_id">ID del Logro:</label>
        <input type="text" id="logro_id" name="logro_id" />

        <label htmlFor="jugador_id">ID del Jugador:</label>
        <input type="text" id="jugador_id" name="jugador_id" />

        <label htmlFor="progreso">Progreso:</label>
        <input type="text" id="progreso" name="progreso" />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion"></textarea>

        <button type="submit">Crear Logro</button>
      </form>
    </div>
  );
};

export default CrearLogroForm;
