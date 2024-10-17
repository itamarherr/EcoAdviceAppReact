import axios from "axios";

const  baseUrl = 'https://localhost:7160/api/Auth';
const register = (email: string, username: string, password: string, name: string) => 
    axios.post(`${baseUrl}/Register`, {email, username, password, name})

const login = (email: string, password: string) => 
    axios.post(`${baseUrl}/Login`, {email, password}).then((Response) => {
        if (Response.data.token){
            localStorage.setItem("token", JSON.stringify(Response.data));
        }
        return Response;
    });


export const auth = {register, login};