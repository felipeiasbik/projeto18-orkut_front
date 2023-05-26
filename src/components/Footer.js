import styled from "styled-components";
import { Link } from "react-router-dom";

export function Footer(){
    return (
        <Context>
            <Link to={"/"}><ion-icon name="home"></ion-icon></Link>
            <Link to={"/profile/1"}><ion-icon name="person"></ion-icon></Link>
            <Link to={"/post"}><ion-icon name="images"></ion-icon></Link>
            <Link to={"/search"}><ion-icon name="search"></ion-icon></Link>
            <Link to={"/signin"}><ion-icon name="log-out"></ion-icon></Link>
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