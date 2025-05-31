export type Alerta = {
  tipo: 'temporal' | 'granizo' | 'enchente' | 'vendaval';
  local: string;
  descricao: string;
  severidade: string;
  dataHora: string;
};
