import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getObjects = async (objectFilters: any) => {
  const response = await api.get(`/objects?state=${objectFilters.state}&city=${objectFilters.city}&objectName=${objectFilters.objectName}`);

  return response.data;
};


export const createObject = async (objectInfos: any) => {
  const response = await api.post('/objects', objectInfos);

  return response.data;
};

export default api;