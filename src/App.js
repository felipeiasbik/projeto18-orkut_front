import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage.js";
import SignUpPage from "./pages/SignUpPage.js";
import SignInPage from "./pages/SignInPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import PostPage from "./pages/PostPage.js";
import Header from "./components/Header.js";
import SearchPage from "./pages/SearchPage.js";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #4f91ca;
  width: 100%;
  padding: 25px 0;
  box-sizing: border-box;
  margin-bottom: 80px;
`
