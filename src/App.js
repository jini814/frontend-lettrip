import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./lettrip-web/Top/Header";
import Navbar from "./lettrip-web/Top/Navbar";

//페이지 경로 설정
import Home from "./lettrip-web/Component/Home";
import Login from "./lettrip-web/Component/Auth/Login/Login";
import SignUp from "./lettrip-web/Component/Auth/SignUp/SignUp";

//커뮤니티 경로 설정
import ArticleList from "./lettrip-web/Component/Article/ArticleList";
import ArticleCreate from "./lettrip-web/Component/Article/ArticleCreate";
import ArticleModify from "./lettrip-web/Component/Article/ArticleModify";
import ArticlePage from "./lettrip-web/Component/Article/ArticlePage";

//여행코스 검색 경로 설정
import TravelSearchPage from "./lettrip-web/Component/Travel/TravelSearch/TravelSearchPage";
import TravelDetailPage from "./lettrip-web/Component/Travel/TravelDetail/TravelDetailPage";

//여행코스 계획 경로 설정
import TravelPlanTemplate from "./lettrip-web/Component/Travel/TravelPlan/TravelPlanTemplate";
import TravelReviewTemplate from "./lettrip-web/Component/Travel/TravelReview/TravelReviewTemplate";

import MissionPage from "./lettrip-web/Component/Mission/QR/QRMissionPage";
import SearchForm from "./lettrip-web/Component/Travel/TravelSearch/SearchForm";
import TravelSearchPage from "./lettrip-web/Component/Travel/TravelSearch/TravelSearchPage";
import TravelDetailPage from "./lettrip-web/Component/Travel/TravelDetail/TravelDetailPage";
import MissionMainPage from "./lettrip-web/Component/Mission/MissionMainPage";
import QRMissionPage from "./lettrip-web/Component/Mission/QR/QRMissionPage";

// 마이페이지
import MyPage from "./lettrip-web/Component/MyPage/MyPage";
import PlaceReviewPage from "./lettrip-web/Component/PlaceReview/PlaceReviewPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />

          <Route path='/travel/plan' element={<TravelPlanTemplate />} />
          <Route path='/travel/review' element={<TravelReviewTemplate />} />
          <Route path='/travel/search' element={<TravelSearchPage />} />
          <Route path='/travel/course/:id' element={<TravelDetailPage />} />

          <Route
            path='/travel/course/create'
            element={<TravelPlanTemplate />}
          />
          <Route
            path='/travel/review/create'
            element={<TravelReviewTemplate />}
          />

          <Route path='/articles' element={<ArticleList />} />
          <Route path='/articles/:id' element={<ArticlePage />} />
          <Route path='/articles/create' element={<ArticleCreate />} />
          <Route path='/articles/modify/:id' element={<ArticleModify />} />

          <Route path='/travel/plan' element={<TravelPlanTemplate />} />
          <Route path='/travel/review' element={<TravelReviewTemplate />} />
          <Route path='/mission' element={<MissionMainPage />} />
          <Route path='/mission/qr' element={<QRMissionPage />} />
          <Route path='/mypage' element={<MyPage />} />

          <Route path='/place' element={<PlaceReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
