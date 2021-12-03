import axios from "axios";

const getUserResponce = async (userId) => {
    return await axios.get(`http://localhost:5000/api/users/${userId}`).then(
        response => response.data)
        .catch((error) => console.error(error));
}

export default getUserResponce;