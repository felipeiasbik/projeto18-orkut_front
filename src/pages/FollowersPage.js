import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import apiFollow from "../services/apiFollow.js";
import { Link } from "react-router-dom";

export default function HomePage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [myTimeLine, setMyTimeLine] = useState(null);
    const [currentId, setCurrentId] = useState(id);
    const [token, setToken] = useState({});
      
    useEffect(()=> {
		if(localStorage.getItem('user')){
            const {token, idUser} = JSON.parse(localStorage.getItem('user'));
            setToken({token, idUser});
            apiFollow.myfollowers(id, token)
                .then( res => {
                    setMyTimeLine(res.data);
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
    } else {
        navigate("/signin");
    }// eslint-disable-next-line
	},[]);

    useEffect(() => {
        if (currentId !== id) {
          setCurrentId(id);
          window.scrollTo(0, 0);
          apiFollow.myfollowers(id)
                .then( res => {
                    setMyTimeLine(res.data);
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
        }
      }, [id, currentId]);

    return (
        <HomeContainer>
            <MyInfos>
                <InfoLeft>
                    <img 
                    alt={myTimeLine?.name} 
                    src={myTimeLine?.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
                    />
                </InfoLeft>
                <InfoRight>
                    <h2>{myTimeLine?.name}</h2>
                    <h3>{myTimeLine?.biography}</h3>
                    <ButtonsInfos>
                        <ButtonIcon to={`/profile/${id}`}>
                            <button><ion-icon name="chevron-back-outline"></ion-icon></button>
                        </ButtonIcon>
                        <LinkIds to={`/following/${id}`}>
                            <button>Quem {myTimeLine?.name.split(" ")[0]} segue</button>
                        </LinkIds>
                    </ButtonsInfos>
                </InfoRight>
            </MyInfos>
            <Content>
                <h1>Lista de seguidores de {myTimeLine?.name.split(" ")[0]}:</h1> 
                {!myTimeLine?.myFollowers ? `Ainda não possui seguidores.` 
                : myTimeLine?.myFollowers.map(({id, name, photo}) => (
                    <FollowList>
                        <LinkIds to={`/profile/${id}`}>
                            <FollowListUser>
                                <img alt={name} src={photo}/>
                                <h2>{name}</h2>
                            </FollowListUser>
                        </LinkIds>
                    </FollowList>
                ))}
            </Content>
            <Footer myId={token}/>        
        </HomeContainer>
    );
}
const LinkIds = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`;
const HomeContainer = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    gap: 40px;
`
const MyInfos = styled.div`
    display: flex;
    padding: 15px;
    margin-top: 10px;
    width: 100%;
    background-color: #387ebc;
    box-sizing: border-box;
`;
const InfoLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    min-width: 90px;
    box-sizing: border-box;
    img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
    }
`;
const InfoRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    box-sizing: border-box;
    margin-right: 5px;
    h2{
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 700;
    }
    h3{
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
    }
`;
const ButtonsInfos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    flex-wrap: wrap;
    button {
        padding: 10px;
        border-radius: 5px;
        border: 0px;
        background-color: #ec1b90;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 500;
        width: 185px;
    }
`;
const ButtonIcon = styled(Link)`
    button {
        padding: 0px;
        border-radius: 5px;
        border: 0px;
        background-color: #ec1b90;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 500;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ion-icon{
        font-size: 30px;
    }
`;
const Content = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    position: relative;
    span {
        width: 100%;
        height: 100px;
        position: absolute;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 60.58%, #000000 200%);
    }
    img {
        width: 100%;
    }
    h1 {
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 500;
        padding-bottom: 25px;
    }
`;
const FollowList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 15px 0;
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }
`;
const FollowListUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
`;
