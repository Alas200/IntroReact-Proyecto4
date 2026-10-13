import { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
    <div>
      Planeta visitado: <strong>{nombre}</strong>
    </div>
  );
}

export default Planeta;