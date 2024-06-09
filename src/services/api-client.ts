import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'eaec4c3bbbc44dfab5880e24fb08ef86',
    }
})