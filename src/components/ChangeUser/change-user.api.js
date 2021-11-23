import axios from "axios";

const changeUserData = async (data) =>{
    return await axios.put(data.url, {data})
    .then(response => response.data)
    .catch(error => console.error(error));
};

export default changeUserData;