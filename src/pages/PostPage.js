import styled from "styled-components";
import { Footer } from "../components/Footer.js";

export default function PostPage() {

    return (
        <Container>
            <Content>
                <DivH1>Postar</DivH1>
                <InternContent>
                    <form>
                        <input placeholder="Link da Foto" name="photo" type="text" required/>
                        <textarea placeholder="Descrição" name="description" type="text" required/>
                        <Button><button type="submit">Publicar</button></Button>
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
    height: 120px;
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
const Button = styled.div`
    display: flex;
    justify-content: center;
`;