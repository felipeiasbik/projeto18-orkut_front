import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import apiHome from "../services/apiHome.js";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();
    const [timeLine, setTimeLine] = useState([]);
    const [token, setToken] = useState({});
      
    useEffect(()=> {
		if(localStorage.getItem('user')){
            const {token, idUser} = JSON.parse(localStorage.getItem('user'));
            setToken({token, idUser});
            apiHome.homePage(token)
                .then( res => {
                    setTimeLine(res.data);
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
    } else {
        navigate("/signin");
    }// eslint-disable-next-line
	},[]);

    return (
        <HomeContainer>
            {timeLine.map(({id, photo, description, createdAt, idUser, nameUser, photoProfile, likes, comments}) => (
                <Content key={id}>
                <span></span>
                <img alt="post" src={photo}/>
                <UserInfo>
                    <LinkIds to={`/profile/${idUser}`}>
                        <img 
                        alt={nameUser} 
                        src={photoProfile ? 
                        photoProfile : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
                        />
                    </LinkIds>
                    <InfoDate>
                        <LinkIds to={`/profile/${idUser}`}>
                            <h2>{nameUser}</h2>
                            <h3>{dayjs(createdAt).format('DD/MM/YYYY')} às {dayjs(createdAt).format('HH:mm')}</h3>
                        </LinkIds>
                    </InfoDate>
                </UserInfo>
                <LikesInfo>
                <ion-icon name="star-outline"></ion-icon>
                    <p>{
                    likes !== null ? 
                    (likes.length >1 ? (
                        <>
                          Curtido por 
                            <LinkIds to={`/profile/${likes[likes.length-1].id}`}>
                                {` ${likes[likes.length-1].name}`}
                            </LinkIds> e mais {likes.length - 1} {likes.length === 2 ? "pessoa" : "pessoas"}
                        </>
                      )
                      : <>
                        Curtido por 
                            <LinkIds to={`/profile/${likes[likes.length-1].id}`}>
                                {` ${likes[likes.length-1].name}`}
                            </LinkIds>
                        </>)
                    : "Ninguém curtiu ainda."
                    }</p>
                </LikesInfo>
                <DescriptionP>{description}</DescriptionP>
                <CommentsInfo>
                    <textarea placeholder="Comentar algo" name="comment"  type="text" required/>
                    <ion-icon name="paper-plane"></ion-icon>
                    {comments[0].commentId !== null && comments.map(({commentId, comment, userPhoto, userId, userName}) => (
                        <CommentInt key={commentId}>
                            <LinkIds to={`/profile/${userId}`}>
                                <img alt={userName} src={userPhoto}/>
                            </LinkIds>
                            <p>{comment}</p>
                        </CommentInt>                
                    ))}
                </CommentsInfo>
            </Content>
            ))}
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
const Content = styled.div`
    background-color: #447298;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
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
        font-weight: 700;
    }
`;
const LikesInfo = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 15px;
    gap: 4px;
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
        margin-top: -4px;
    }
    p{
        margin-top: 4px;
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
        margin-top: 5px;
    }
`;