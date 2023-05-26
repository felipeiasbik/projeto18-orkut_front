import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Content to={"/"}>Orkut</Content>
    );
}
const Content = styled(Link)`
    background-color: #d4ddee;
    height: 70px;
    width: 100%;
    font-family: 'Audiowide', cursive;
    font-size: 40px;
    color: #ec1b90;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;