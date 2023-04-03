import { createContext, useState } from "react";
import api from '../api';

export const VideoContext = createContext({} as any);

export const VideoStore = ({ children }: any) => {

    const [token] = useState(localStorage.getItem('token') as string);

    const Create_Video = ( user_id: string, title: string, description: string) => {
        api.post('/videos/create-video', { user_id, title, description } ,{ headers: { Authorization: token } }).then(() => {
            alert('Video cadastrado com sucesso');
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <VideoContext.Provider value={{ 
            Create_Video
        }}>
            {children}
        </VideoContext.Provider>
    )
}