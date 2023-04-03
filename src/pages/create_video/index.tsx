import React, { useContext, useState } from 'react';
import { ButtonUpVideo, ContainerUploadVideo, Divider, FormUploadVideo, InputUpVideo } from "./styles";
import Upload from '../../assets/upload.png';
import { VideoContext } from "../../contexts/videoContext";
import { UserContext } from '../../contexts/userContext';

function CreateVideo() {
    const { Create_Video } = useContext(VideoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useContext(UserContext);

    return (
        <ContainerUploadVideo>
            <h3 style={{marginLeft: '10px'}}>Enviar vídeos</h3>
            <Divider />
            <FormUploadVideo>
                <InputUpVideo placeholder='Título do vídeo' type='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <InputUpVideo placeholder='Descrição do vídeo' type='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <h5>Clique para selecionar seu arquivo de video.</h5>
                <img src={Upload} style={{ width: '50px', height: '50px', cursor: 'pointer'}} alt='' />
                <ButtonUpVideo onClick={() => Create_Video( user.id, title, description )}>Enviar Video</ButtonUpVideo>
            </FormUploadVideo>
        </ContainerUploadVideo>
    )
}

export default CreateVideo;