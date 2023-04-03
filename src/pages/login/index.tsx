import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { ButtonLogin, Container, FormContainer, Divider, InputLogin } from './styles';

function Login() {
    const { handleLogin, SingUp } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

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
                <h3 style={{color: 'blue'}}>Não possui cadastro ?</h3>
                <InputLogin placeholder='nome' type='name' value={name} onChange={(e) => setName(e.target.value)} />
                <InputLogin placeholder='email' type='email' value={emailReg} onChange={(e) => setEmailReg(e.target.value)} />
                <InputLogin placeholder='password' type='password' value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
                <ButtonLogin onClick={() => SingUp(name, emailReg, passwordReg)}>Cadastrar</ButtonLogin>
            </FormContainer>
        </Container>

    )
}

export default Login;