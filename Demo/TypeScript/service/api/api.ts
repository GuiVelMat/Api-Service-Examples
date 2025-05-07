import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.API_URL}:${process.env.API_PORT}/api`, // Uses dotenv variables for API URL and port
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        if (token) config.headers.Authorization = `Bearer ${token}`;
        // Add more interceptors here if needed

        return config;
    },
    (error) => Promise.reject(error)
)

// Error handling interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject({
                status: error.response.status,
                statusText: error.response.statusText,
                errors: error.response.data.errors,
            })
        }
        return Promise.reject({ errors: ['Something went wrong'] });
    }
)

export default api
