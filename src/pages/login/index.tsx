import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { ButtonLogin, Container, FormContainer, Divider, InputLogin } from './styles';

function Login() {
    const { handleLogin } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <FormContainer>
                <h3>Realizar Login</h3>
                <InputLogin placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputLogin placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <ButtonLogin onClick={() => handleLogin(email, password)}>Login</ButtonLogin>
            </FormContainer>
            <Divider />
            <FormContainer>
                <h3>Não possui cadastro ?</h3>
                <InputLogin placeholder='nome' type='name' />
                <InputLogin placeholder='email' type='email' />
                <InputLogin placeholder='password' type='password' />
                <ButtonLogin onClick={() => handleLogin(email, password)}>Cadastrar</ButtonLogin>
            </FormContainer>
        </Container>

    )
}

export default Login;