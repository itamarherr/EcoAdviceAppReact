import axios from "axios";

const url = import.meta.env.VITE_BASE_URL + "/posts";

export const getPost = (jwt: string) => {
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },

    });
};