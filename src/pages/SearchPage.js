import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import apiSearch from "../services/apiSearch.js";
import { Link } from "react-router-dom";

export default function SearchPage() {

    const navigate = useNavigate();
    const [token, setToken] = useState({});
    const [form, setForm] = useState({name: ""});
    const [listSearch, setListSearch] = useState();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    useEffect(()=> {

		if(localStorage.getItem('user')){

            const {token, idUser} = JSON.parse(localStorage.getItem('user'));
            setToken({token, idUser});
            
        } else {
            navigate("/signin");
        }        
    // eslint-disable-next-line
	},[]);

    function searching(e){
        e.preventDefault();        

        const params = {
            name: form.search
        };
        apiSearch.searchUser(params.name, token.token)
            .then(res => {
                setListSearch(res.data);
            })
            .catch( err => {
                alert(`Erro: ${err.response.data}`)
            });
    }
    console.log(listSearch)
    return (
        <Container>
            <Content>
                <DivH1>Buscar Amigo</DivH1>
                <InternContent>
                    <form onSubmit={searching}>
                        <MyInput placeholder="Digite o nome da pessoa" name="search" type="text" value={form.search} onChange={handleForm} required/>
                        <MyButton type="submit"><ion-icon name="search-circle"></ion-icon></MyButton>
                    </form>
                </InternContent>
            </Content>
            <ResultsSearch>
                {listSearch?.length === 0 ? "Nenhum resultado encontrado" : listSearch?.map(({id, photo, name}) => (
                    <LinkIds to={`/profile/${id}`} key={id}>
                        <RS>
                            <RSphoto>
                                <img alt={name} src={photo} />
                            </RSphoto>
                            <RSname>
                                {name}
                            </RSname>
                        </RS>
                    </LinkIds>
                ))}
            </ResultsSearch>
            <Footer myId={token.idUser}/>         
        </Container>
    );
}
const LinkIds = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`;
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
    justify-content: flex-start;
    margin-left: 25px;
`;
const Content = styled.div`
    width: 100%;
    background-color: #387ebc;
    padding: 25px;
    box-sizing: border-box;
`;
const InternContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-left: 25px;
    box-sizing: border-box;
`;
const MyInput = styled.input`
    position: relative;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0;
    padding: 10px;
    color: #387ebc;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    outline: none;
`;
const MyButton = styled.button`
    position: absolute;
    background-color: #ec1b90;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 0;
    padding: 10px;
    margin-left: 10px;
    ion-icon {
        font-size: 30px;
        color: #ffffff;
        box-sizing: border-box;
    }
`;
const ResultsSearch = styled.div`
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const RS = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 15px;
`;
const RSphoto = styled.div`
    display: flex;
    align-items: flex-start;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`;
const RSname = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
`;