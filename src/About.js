import React from "react";
import { useSearchParams } from "react-router-dom";

const About = ({ location }) => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail") === "true";
  console.log(detail);
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 프로젝트입니다.</p>
      <p>쿼리 정보 (detail)</p>
    </div>
  );
};

export default About;
