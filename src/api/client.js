import axios from "axios";

const client = axios.create();
client.defaults.baseURL =
  "http://ec2-13-125-136-174.ap-northeast-2.compute.amazonaws.com:8000";

export default client;
