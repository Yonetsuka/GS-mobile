import axios from 'axios';
import { Alerta } from '../types/alerta';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // backend Spring Boot
});

export const getAlertas = () => api.get<Alerta[]>('/alertas');
export const criarAlerta = (data: Alerta) => api.post<Alerta>('/alertas', data);
