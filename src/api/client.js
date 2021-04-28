import axios from 'axios';

const client = axios.create();
client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'http://ec2-13-125-136-174.ap-northeast-2.compute.amazonaws.com:8000';

export default client;
