import React from "react";
import { useParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profilesData = {
  ina: {
    name: "김이나",
    introduce: "안녕하세요??",
  },
};

const Profile = () => {
  // 매개 변수를 받을때 match 안에 있는 값을 참조합니다.
  let params = useParams();
  const profile = profilesData[params.username];

  console.log("profile", profile);
  console.log("params", params);

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{profile.introduce}</p>
    </div>
  );
};

export default Profile;
