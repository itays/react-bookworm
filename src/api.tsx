import axios from 'axios';
export default {
  user: {
    login: (credentials: any) => axios.post('/api/auth', { credentials }).then((res: any) => res.data.user)
  }
};