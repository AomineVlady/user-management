import axios from "axios";

const getUsersList = async (pageNumber) => {
    return await axios
        .get(`http://localhost:5000/api/users/?page=${pageNumber}`)
        .then((response) => response.data)
        .catch((error) => console.error(error));
};

export default getUsersList;
