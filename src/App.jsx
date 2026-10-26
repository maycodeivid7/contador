
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Meu primeiro React</h1>

      <p>Cliques: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Clique aqui!
      </button>
    </div>
  );
}

export default App;
