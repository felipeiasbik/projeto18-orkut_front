import styled from "styled-components";
import { Footer } from "../components/Footer.js";

export default function SearchPage() {
    return (
        <Container>
            <Content>
                <DivH1>Buscar Amigo</DivH1>
                <InternContent>
                    <form>
                        <MyInput placeholder="Digite o nome da pessoa" name="search" type="text" required/>
                        <MyButton type="submit"><ion-icon name="search-circle"></ion-icon></MyButton>
                    </form>
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