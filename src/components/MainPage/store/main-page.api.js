import axios from "axios";

const getUsersList = async (url) => {
    return await axios
        .get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
};

export default getUsersList;
