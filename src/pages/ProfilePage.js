import styled from "styled-components";
import { Footer } from "../components/Footer.js";
import { useNavigate, useParams } from "react-router";
import { useEffect,useState } from "react";
import apiHome from "../services/apiHome.js";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import apiFollow from "../services/apiFollow.js";

export default function ProfilePage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [idUserToken, setIdUserToken] = useState({});
    const [myTimeLine, setMyTimeLine] = useState(null);
    const [followingUsers, setFollowingUsers] = useState(null);
    const [currentId, setCurrentId] = useState(id);
    const [tokenA, setTokenA] = useState({});

    useEffect(()=> {

        window.scrollTo(0, 0);
		if(localStorage.getItem('user')){

            const {token, idUser} = JSON.parse(localStorage.getItem('user'));
            setIdUserToken(idUser);
            setTokenA({token, idUser});
            apiHome.profile(id, token)
                .then( res => {
                    setMyTimeLine(res.data);
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
            
            apiFollow.following(idUser, token)
            .then( res => {
                console.log(res.data);
                setFollowingUsers(res?.data.following && res.data.following.map(v => v.id));
            })
            .catch( err => {
                alert(`Erro: ${err.response.data}`)
            });
            
        } else {
            navigate("/signin");
        }        
    // eslint-disable-next-line
	},[]);

    useEffect(() => {

        window.scrollTo(0, 0);

        if (currentId !== id) {
          setCurrentId(id);
          console.log(tokenA.token)
          apiHome.profile(id, tokenA.token)
                .then( res => {
                    setMyTimeLine(res.data);
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
            // apiFollow.following(id,tokenA.token)
            // .then( res => {
            //     setFollowingUsers(res.data.following && res.data.following.map(v => v.id));
            // })
            // .catch( err => {
            //     alert(`Erro: ${err.response.data}`)
            // });
        }
      }, [id, currentId, followingUsers]);


      function handleClick(){
        window.scrollTo(0, 0);
        console.log(followingUsers)
            if(followingUsers?.includes(myTimeLine?.id) === false || followingUsers === null){
                const body = { userFollowId: currentId };
                apiFollow.followUser(body,tokenA.token)
                .then( res => {
                    const myFollowers = res.data.myFollowers || [];
                    // setFollowingUsers(myFollowers.map(v => v.id));
                    window.location.reload();
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });

            } else {
                apiFollow.unfollowUser(id,tokenA.token)
                .then( res => {
                        const myFollowers = res.data.myFollowers || [];
                        // setFollowingUsers(myFollowers.map(v => v.id));
                        window.location.reload();
                })
                .catch( err => {
                    alert(`Erro: ${err.response.data}`)
                });
            }
      }

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
                    <NameButton val={!followingUsers?.includes(myTimeLine?.id)}>
                        <h2>{myTimeLine?.name}</h2>
                        {idUserToken !== myTimeLine?.id && <button onClick={handleClick}>{!followingUsers?.includes(myTimeLine?.id) ? "Seguir" : "Deixar de seguir"}</button>}
                    </NameButton>
                    <h3>{myTimeLine?.biography}</h3>
                    <ButtonsInfos>
                        <LinkIds to={`/followers/${id}`}>
                            <button>Seguidores</button>
                        </LinkIds>
                        <LinkIds to={`/following/${id}`}>
                            <button>Seguindo</button>
                        </LinkIds>
                    </ButtonsInfos>
                </InfoRight>
            </MyInfos>
            {!myTimeLine?.posts 
            ? `${myTimeLine?.name} ainda não fez publicações.`
            : myTimeLine?.posts.map(({id, photo, description, createdAt, likes, comments}) => (
            <Content key={id}>
                <span></span>
                <img alt="post" src={photo}/>
                <UserInfo>
                    <InfoDate>
                        <h3>{dayjs(createdAt).format('DD/MM/YYYY')} às {dayjs(createdAt).format('HH:mm')}</h3>
                    </InfoDate>
                </UserInfo>
                <LikesInfo>
                    <button >
                        <ion-icon name="star-outline"></ion-icon>
                    </button>
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
                    {comments !== null && comments.map(({commentId, comment, userName, userId, userPhoto}) => (
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
            {tokenA.token && tokenA.idUser && <Footer myId={tokenA} />}
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
const NameButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 10px;
    h2{
        display: flex;
        align-items: center;
        color: red;
    }
    button {
        padding: 5px;
        border-radius: 5px;
        border: 0px;
        background-color: ${(props) => props.val === true ? "#ec1b90" : "#bbbbbb"};
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 500;
        width: 120px;
    }
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
        width: 92px;       
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
    margin-top: 3px;
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
        margin-top: -7px;
        color: #ffffff;
    }
    button {
        background-color: transparent;
        border: 0;
        padding: 0;
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