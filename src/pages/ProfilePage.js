import styled from "styled-components";
import { Footer } from "../components/Footer.js";

export default function ProfilePage() {

    return (
        <HomeContainer>
            <MyInfos>
                <InfoLeft>
                    <img alt="profile" src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"/>
                </InfoLeft>
                <InfoRight>
                    <h2>Manoela Joaquina</h2>
                    <h3>Esta é a minha biografia que falo um pouco sobre minha pessoa. Gosto muito disso.</h3>
                    <ButtonsInfos>
                        <button>Seguidores</button>
                        <button>Seguindo</button>
                    </ButtonsInfos>
                </InfoRight>
            </MyInfos>
            <Content>
                <span></span>
                <img alt="post" src="https://blog.xpeducacao.com.br/wp-content/uploads/2022/08/praia-como-adicionar-imagem-html-1024x685.jpg"/>
                <UserInfo>
                    <InfoDate>
                        <h3>23/05/2023 às 20h03</h3>
                    </InfoDate>
                </UserInfo>
                <LikesInfo>
                    <ion-icon name="heart-outline"></ion-icon>
                    <p>Curtido por Natalia Benfica e outras 57 pessoas.</p>
                </LikesInfo>
                <DescriptionP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DescriptionP>
                <CommentsInfo>
                    <textarea placeholder="Comentar algo" name="comment"  type="text" required/>
                    <ion-icon name="paper-plane"></ion-icon>
                    <CommentInt>
                        <img alt="profile" src="https://www.rhportal.com.br/wp-content/uploads/shutterstock_1874708293.jpg"/>
                        <p>dsaj sdajdsa kjadsk adsasd dkds kjfdskjf ksfdj ksfdj fsdkjsfdkfjds kfdsj kfdsjsfdk jsfdk fsdjksdfj kfds </p>
                    </CommentInt>
                    <CommentInt>
                        <img alt="profile" src="https://www.vittude.com/blog/wp-content/uploads/otimismo-3.jpg"/>
                        <p>dsaj sdajdsa kjadsk adsasd dkds kjfdskjf ksfdj ksfdj fsdkjsfdkfjds kfdsj kfdsjsfdk jsfdk fsdjksdfj kfds </p>
                    </CommentInt>
                </CommentsInfo>
            </Content>
            <Content>
                <span></span>
                <img alt="post" src="https://static-cse.canva.com/blob/611603/screen3.jpg"/>
                <UserInfo>
                   <InfoDate>
                        <h3>23/05/2023 às 20h03</h3>
                    </InfoDate>
                </UserInfo>
                <LikesInfo>
                    <ion-icon name="heart-outline"></ion-icon>
                    <p>Curtido por Natalia Benfica e outras 57 pessoas.</p>
                </LikesInfo>
                <DescriptionP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DescriptionP>
                <CommentsInfo>
                    <textarea placeholder="Comentar algo" name="comment"  type="text" required/>
                    <ion-icon name="paper-plane"></ion-icon>
                    <CommentInt>
                        <img alt="profile" src="https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg"/>
                        <p>dsaj sdajdsa kjadsk adsasd dkds kjfdskjf ksfdj ksfdj fsdkjsfdkfjds kfdsj kfdsjsfdk jsfdk fsdjksdfj kfds </p>
                    </CommentInt>
                    <CommentInt>
                        <img alt="profile" src="https://www.al.sp.gov.br/repositorio/deputadoPortal/fotos/20230315-170849-id=1649-PEQ.jpeg"/>
                        <p>dsaj sdajdsa kjadsk adsasd dkds kjfdskjf ksfdj ksfdj fsdkjsfdkfjds kfdsj kfdsjsfdk jsfdk fsdjksdfj kfds </p>
                    </CommentInt>
                </CommentsInfo>
            </Content>
            <Footer />        
        </HomeContainer>
    );
}
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
    min-width: 100px;
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
        width: 92px;;
    }
`;
const Content = styled.div`
    background-color: #447298;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 15px;
    span {
    width: 100%;
    height: 100px;
    position: absolute;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 60.58%, #000000 200%);
    }
    img {
        width: 100%;
    }
`;
const UserInfo = styled.div`
    display: flex;
    padding: 15px;
    gap: 10px;
    box-sizing: border-box;
    position: absolute;
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
`;
const InfoDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    h2{
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 700;
    }
    h3{
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`;
const LikesInfo = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    box-sizing: border-box;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
    ion-icon {
        font-size: 26px;
        min-width: 30px;
    }
`;
const DescriptionP = styled.p`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    box-sizing: border-box;
    padding: 0 20px 15px 20px;
`;
const CommentsInfo = styled.div`
    background-color: #447298;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
    textarea {
        background-color: #3B6A90;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        border: 0;
        padding: 15px 40px 15px 20px;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 20px;
        outline: none;
        resize: none;
        position: relative;
        overflow: hidden;
        margin-bottom: 7px;
    }
    textarea::placeholder {
        color: #a2b9cc;
    }
    ion-icon {
        position: absolute;
        right: 15px;
        margin-top: 15px;
        font-size: 20px;
        color: #d4ddee;
    }
`;
const CommentInt = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0 20px;
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
    p{
        padding: 0 15px 15px 15px;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
    }
`;