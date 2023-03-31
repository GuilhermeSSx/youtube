import { ButtonUpVideo, ContainerUploadVideo, Divider, FormUploadVideo, InputUpVideo } from "./styles";
import Upload from '../../assets/upload.png';

function UploadVideo() {

    return (
        <ContainerUploadVideo>
            <h3 style={{marginLeft: '10px'}}>Enviar vídeos</h3>
            <Divider />
            <FormUploadVideo>
                <InputUpVideo placeholder='Título do vídeo' type='text' />
                <InputUpVideo placeholder='Descrição do vídeo' type='text' />
                <h5>Clique para selecionar seu arquivo de video.</h5>
                <img src={Upload} style={{ width: '50px', height: '50px', cursor: 'pointer'}} alt='' />
                <ButtonUpVideo>Enviar Video</ButtonUpVideo>
            </FormUploadVideo>
        </ContainerUploadVideo>
    )
}

export default UploadVideo;