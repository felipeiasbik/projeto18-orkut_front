import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import apiAuth from "../services/apiAuth.js";

export default function SignInPage() {

    const [form, setForm] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const [token, setToken] = useState({});
      
    useEffect(()=> {
		if(localStorage.getItem('user')){
            const {token, idUser} = JSON.parse(localStorage.getItem('user'));
            setToken({token, idUser});
        apiAuth.logOut(idUser)
        .then(res => {
            console.log("Deslogado")
        })
        .catch( err => {
            alert(`Erro: ${err.response.data}`)
        });
    }// eslint-disable-next-line
	},[]);

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function loginUser(e){
        e.preventDefault();

        const body = {email: form.email, password: form.password};

        apiAuth.signIn(body)
            .then( res => {
                const {token, idUser} = res.data;
                localStorage.setItem("user", JSON.stringify({token, idUser}));
                navigate("/");
            })
            .catch( err => {
                alert(`Erro: ${err.response.data}`)
            })
    }

    return (
        <Container>
            <Content>
                <DivH1>Você se desconectou!</DivH1>
                <InternContent>
                    <form onSubmit={loginUser}>
                        <input placeholder="E-mail" name="email" type="email" value={form.email} onChange={handleForm} required/>
                        <input placeholder="Senha" name="password" type="password" autoComplete="new-password" value={form.password} onChange={handleForm} required/>
                        <Button><button type="submit">Entrar</button></Button>
                    </form>

                    <Login to={"/signup"}>
                        Não tem uma conta? Cadastre agora!
                    </Login>
                </InternContent>
            </Content>
            <Footer myId={token}/>       
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