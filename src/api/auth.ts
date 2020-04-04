import axios, {AxiosResponse} from 'axios';


type LoginDataSuccess ={
    token_type: string
    access_token: string;
    scope: string,
    id_token: string;
    Name: string;
    Email: string;
}

type LoginDataError = {
    status: string;
    listErros?: {
        code: string,
        message: string,
        // listIdentificadores: any
    }[],
    listAlerts: any,
    object?: any
}

export const login = (username: string, password: string): Promise<AxiosResponse<LoginDataSuccess & LoginDataError>> => {
    
    const body = new URLSearchParams();
    body.append("username", username)
    body.append("password", password)

    return axios.post("/api/oauth2/login", body);
}

export const logout = (id: string) : Promise<AxiosResponse> => {
    return axios.get("/api/oauth2/logout", { headers: { id_token: id }});
};