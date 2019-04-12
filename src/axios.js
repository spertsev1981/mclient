import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://213.128.208.33:8080/alfresco/',
  headers: {
    "Access-Control-Allow-Origin": "http://localhos8080",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
    'X-Requested-With': 'XMLHttpRequest',
    'Accept-Language': 'ru'
  },
})

export default instance
