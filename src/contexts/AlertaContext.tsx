import { createContext, useState } from 'react';
import { Alerta } from '../types/alerta';

export const AlertaContext = createContext({
  alertas: [] as Alerta[],
  adicionarAlerta: (a: Alerta) => {}
});

export const AlertaProvider = ({ children }: any) => {
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  function adicionarAlerta(alerta: Alerta) {
    setAlertas([...alertas, alerta]);
  }

  return (
    <AlertaContext.Provider value={{ alertas, adicionarAlerta }}>
      {children}
    </AlertaContext.Provider>
  );
};
