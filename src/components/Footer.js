import styled from "styled-components";
import { Link } from "react-router-dom";
import apiAuth from "../services/apiAuth.js";
import { useNavigate } from "react-router";

export function Footer({myId}){
    const navigate = useNavigate();

    function logoutClick(){
        apiAuth.logOut(myId.token)
            .then(res => {
                navigate("/signin");
                localStorage.removeItem("user");
            })
            .catch( err => {
                alert(`Erro: ${err.response.data}`)
            });
    }

    return (
        <Context>
            <Link to={"/"}><ion-icon name="home"></ion-icon></Link>
            <Link key={myId?.idUser} to={`/profile/${myId?.idUser}`}><ion-icon name="person"></ion-icon></Link>
            <Link to={"/post"}><ion-icon name="images"></ion-icon></Link>
            <Link to={"/search"}><ion-icon name="search"></ion-icon></Link>
            {/* <Link to={"/signin"}><ion-icon name="log-out"></ion-icon></Link> */}
            <div onClick={logoutClick}><ion-icon name="log-out"></ion-icon></div>
        </Context>
    );
}
const Context = styled.div`
    background-color: #387ebc;
    padding: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 70px;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 1;
    ion-icon{
        font-size:27px;
        color: #ffffff;
    }
`;