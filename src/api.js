const API_BASE_URL =
  'https://my-json-server.typicode.com/yagoag/amazon-redesign';

const api = {
  get: (endpoint) =>
    fetch(`${API_BASE_URL}${endpoint}`).then((response) => response.json()),
};

export default api;
