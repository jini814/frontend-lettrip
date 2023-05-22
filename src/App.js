import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./lettrip-web/Top/Header";
import Navbar from "./lettrip-web/Top/Navbar";

//페이지 경로 설정
import Home from "./lettrip-web/Component/Home"; // ~:8080/ 홈 화면 (미정)
import Login from "./lettrip-web/Component/Auth/Login/Login"; // ~:8080/Login 로그인 화면
import Sign from "./lettrip-web/Component/Auth/SignUp/SignUp.js"; // ~:8080/Sign-up 회원가입 화면

import CourseCreate from "./lettrip-web/Component/Travel/CoursePlan/CourseCreate"; // ~: /Travel/create/course 코스 등록 계획 화면
import ReviewCreate from "./lettrip-web/Component/Travel/CourseReview/ReviewCreate"; // ~: /Travel/create/review 코스 후기 등록 화면
//import ReviewPlaceForm from "./lettrip-web/Component/Travel/CourseReview/ReviewPlaceForm"; // ~: /Travel/create/review/place 코스 후기 장소 검색 화면
//import CoursePlaceForm from "./lettrip-web/Component/Travel/CoursePlan/CoursePlaceForm"; // ~: /Travle/create/course/place 코스 계획 장소 검색 화면

import ArticlesList from "./lettrip-web/Component/Article/ArticlesList"; // ~:8080/Articles 게시판 전체 목록 화면
import ArticlesCreate from "./lettrip-web/Component/Article/ArticlesCreate"; // ~:8080/Articles/create 게시판 글 등록 화면
import ArticlesModify from "./lettrip-web/Component/Article/ArticlesModify"; // ~:8080/Articles/modify/{article-id} 게시판 글 수정 화면
import ArticlesPage from "./lettrip-web/Component/Article/ArticlesPage"; // ~:8080/Articles/{article-id} 게시판 글 상세 화면
import CoursePlanTemplate from "./lettrip-web/Component/Travel/Plan/CoursePlanTemplate";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign-up" element={<Sign />} />
          <Route path="/Travel/create/course" element={<CourseCreate />} />
          <Route path="/Travel/create/review" element={<ReviewCreate />} />
          <Route path="/Articles" element={<ArticlesList />} />
          <Route path="/Articles/create" element={<ArticlesCreate />} />
          <Route
            path="/Articles/modify/:article-id"
            element={<ArticlesModify />}
          />
          <Route path="/Articles/page" element={<ArticlesPage />} />
          <Route path="/plan" element={<CoursePlanTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
