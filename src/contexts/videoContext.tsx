import { createContext, useEffect, useState, useContext } from "react";
import api from '../api';
import { UserContext } from "./userContext";

export const VideoContext = createContext({} as any);

export const VideoStore = ({ children }: any) => {

    const [token] = useState(localStorage.getItem('token') as string);
    const [videoSearch, setVideoSearch] = useState([]);
    const [videosUser, setVideosUser] = useState([]);
    const { user } = useContext(UserContext);

    const Create_Video = ( user_id: string, title: string, description: string) => {
        api.post('/videos/create-video', { user_id, title, description }, { headers: { Authorization: token } }).then(() => {
            alert('Video cadastrado com sucesso');
        }).catch((error) => {
            console.log(error);
        })
    }

    const Search_Video = ( search: string ) => {
        api.get(`/videos/search?search=${search}`).then(( { data } ) => {
            setVideoSearch(data.videos);
        }).catch((error) => {
            console.log(error);
        })
    }

    const Videos_User = ( user_id: string ) => {
        api.get(`/videos/get-videos/${user_id}`, { headers: { Authorization: token, } } ).then(( { data } ) => {
            setVideosUser(data.videos);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        Videos_User(user.id);
    }, 
    [videosUser]);

    return (
        <VideoContext.Provider value={{ 
            Create_Video,
            Search_Video,
            videoSearch,
            Videos_User,
            videosUser
        }}>
            {children}
        </VideoContext.Provider>
    )
}