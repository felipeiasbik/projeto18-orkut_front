import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiAuth from "../services/apiAuth.js";

export default function SignUpPage() {

    const navigate = useNavigate();
    const [form, setForm] = useState({email: "", password: ""});

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function registerUser(e){
        e.preventDefault();

        if (form.password !== form.confirmPassword) return alert("ERRO: As senhas não conferem!")

        const body = {
            name: form.name,
            email: form.email,
            photo: form.photo,
            biography: form.biography,
            password: form.password,
            confirmPassword: form.confirmPassword
        }

        apiAuth.signUp(body)
            .then( res => {
                alert("Cadastro realizado com sucesso!");
                navigate("/signin");
            })
            .catch( err => {
                alert(`Erro: ${err.response.data}`)
            });
    }
    
    return (
        <Container>
            <Content>
                <DivH1>Cadastro</DivH1>
                <InternContent>
                    <form onSubmit={registerUser}>
                        <input placeholder="Nome" name="name"  type="text" value={form.name} onChange={handleForm} required/>
                        <input placeholder="E-mail" name="email" type="email" value={form.email} onChange={handleForm} required/>
                        <input placeholder="Foto do Perfil" name="photo" type="text" value={form.photo} onChange={handleForm} required/>
                        <textarea placeholder="Biografia" name="biography" type="text" value={form.biography} onChange={handleForm} rows="3"required/>
                        <input placeholder="Senha" name="password" type="password" value={form.email.password} onChange={handleForm} required/>
                        <input placeholder="Confirme a senha" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleForm} required/>
                        <Button><button type="submit">Cadastrar</button></Button>
                    </form>

                    <Login to={"/signin"}>
                        Já tem uma conta? Entre agora!
                    </Login>
                </InternContent>
            </Content>
            <Footer />        
        </Container>
    );
}
const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
`
const DivH1 = styled.h1`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    box-sizing: border-box;
    height: 40px;
    display: flex;
    justify-content: center;
`;
const Content = styled.div`
    width: 100%;
    background-color: #387ebc;
    padding: 25px;
    box-sizing: border-box;
`;
const InternContent = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        margin: 8px 0;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 0;
        padding: 10px;
        color: #387ebc;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        outline: none;
    }
    textarea {
        margin: 8px 0;
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 0;
        padding: 10px;
        color: #387ebc;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        outline: none;
        resize: none;
    }
    button{
        background-color: #ec1b90;
        width: 70%;
        margin: 18px 0 8px 0;
        height: 40px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 0;
        padding: 10px;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 700;
    }
`;
const Login = styled(Link)`
    margin: 20px 0 10px 0;
    text-decoration: none;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 700;
`;
const Button = styled.div`
    display: flex;
    justify-content: center;
`;