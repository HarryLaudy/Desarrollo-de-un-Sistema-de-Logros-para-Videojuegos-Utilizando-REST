import React, { useState } from "react";
import axios from "axios";
import "../style/logros_list.css";

const LogrosList = () => {
  const [jugadorId, setJugadorId] = useState("");
  const [logros, setLogros] = useState([]);

  const handleChangeJugador = (event) => {
    setJugadorId(event.target.value);
  };


  const handleChangeProgreso = (event, logroId) => {
    const newProgreso = event.target.value;

    setLogros(
      logros.map((logro) => {
        if (logro.id === logroId) {
          return {
            ...logro,
            nouveauProgreso: newProgreso,
          };
        }
        return logro;
      })
    );
  };

  const handleUpdateLogro = async (event, logroId) => {
    event.preventDefault();

    try {
      const logroToUpdate = logros.find((logro) => logro.id === logroId);
      await axios.post("/api/logros/actualizar", {
        jugador_id: jugadorId,
        logro_id: logroId,
        progreso: logroToUpdate.nouveauProgreso, // Utilisation du progreso local
      });

      handleSubmit(event);
    } catch (error) {
      console.error("Error updating logro", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/logros/jugador/${jugadorId}`);
      setLogros(response.data.logros);
    } catch (error) {
      console.error("Error fetching logros", error);
    }
  };

  return (
    <div className="logros-container">
      <h2>List Logros para un jugador</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jugadorId">ID Jugador </label>
        <input
          type="text"
          id="jugadorId"
          value={jugadorId}
          onChange={handleChangeJugador}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {logros.map((logro) => (
          <li key={logro.id}>
            <p>ID: {logro.id}</p>
            <p>Jugador ID: {logro.jugador_id}</p>
            <p>Progreso: {logro.progreso}</p>
            <p>Descripción: {logro.descripcion}</p>
            <form onSubmit={(e) => handleUpdateLogro(e, logro.id)}>
              <label htmlFor={`nuevoProgreso_${logro.id}`}>
                Nueovo Progreso:
              </label>
              <input
                type="text"
                id={`nuevoProgreso_${logro.id}`}
                value={logro.nuevoProgreso}
                onChange={(e) => handleChangeProgreso(e, logro.id)}
                required
              />
              <button type="submit">Update</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogrosList;
