import { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia((prevDistancia) => prevDistancia + 10);
      setCombustible((prevCombustible) => (prevCombustible > 0 ? prevCombustible - 2 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const nombresPlanetas = ["Marte", "Kepler-22b", "Gliese 581", "Pandora", "Tatooine"];
    const planetaAleatorio = nombresPlanetas[Math.floor(Math.random() * nombresPlanetas.length)];
    
    setPlanetasVisitados((prev) => [...prev, `${planetaAleatorio} (${prev.length + 1})`]);
  };

  return (
    <div>
      <h1>Panel de Control </h1>
      
      <div>
        <p>Distancia recorrida: {distancia} km</p>
        <p>Combustible: {combustible}%</p>
        <p>{mensajeEstado}</p>
      </div>

      <button onClick={aterrizar}>
        Aterrizar
      </button>

      <h2>Bitácora de Planetas</h2>
      {planetasVisitados.length === 0 ? (
        <p>Ningún planeta visitado todavía.</p>
      ) : (
        planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))
      )}
    </div>
  );
}

export default App;