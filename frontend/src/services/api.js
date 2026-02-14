import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data?.message || error.message);
        return Promise.reject(error);
    }
);

export const getClassDetails = (id) => api.get(`/classes/${id}`);
export const getClassStudents = (id) => api.get(`/students?classId=${id}`); // Assuming backend supports filtering
export const getAttendanceStats = (id) => api.get(`/attendance/stats/${id}`); // Mock endpoint or use grade logic

export default api;
