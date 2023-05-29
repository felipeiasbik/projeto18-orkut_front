import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Content to={"/"}><h3>new</h3>Orkut</Content>
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
   -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
   -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    h3{
    margin-top: 10px;
    font-size: 15px;
    }
`;