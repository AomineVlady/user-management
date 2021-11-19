import axios from "axios";
import adapter from "../../../common/utils"

const getResponse = async (url) => {
    return await axios.get(url).then(
        (response) => adapter(response.data.data))
        .catch((error) => console.error(error));
}

export default getResponse;