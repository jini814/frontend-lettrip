import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMyProfile,
  modifyMyImage,
  modifyMyProfileImage,
  modifyMyNickname,
  modifyMyProfile,
  modifyMyPassword,
} from "../../../Service/MyPageService";

import anonymous_profile from "../../../../image/lettrip_anonymous_profile.png";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosCamera } from "react-icons/io";
import "../MyPage.css";

const AccountModify = () => {
  const navigate = useNavigate();
  const [accountForm, setAccountForm] = useState({
    image: null,
    nickname: "",
    password: "",
  });
  const [profileForm, setProfileForm] = useState({
    nickname: "",
    sex: "",
    birthDate: "",
    password: "",
  });
  const [profile, setProfile] = useState({});
  const [showFileInput, setShowFileInput] = useState(false);

  useEffect(() => {
    getMyProfile()
      .then((response) => {
        setProfile(response);
      })
      .catch((e) => {
        console.log(e);
        alert("오류 발생");
      });
  }, []);

  // 회원 탈퇴 페이지로 이동
  const handleWithdrawClick = () => {
    navigate("/mypage/withdraw");
  };

  // 정보 입력
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setAccountForm((prevAccountForm) => ({
      ...prevAccountForm,
      [name]: value,
    }));
  };

  //사진 수정하기
  const modifyImage = () => {
    setShowFileInput(true);
  };
  //닉네임 수정하기
  const modifyNickname = () => {
    setAccountForm({
      ...accountForm,
      nickname: profile.nickname !== null ? profile.nickname : "",
    });
  };

  //파일 선택 시
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAccountForm({
        ...accountForm,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // 이미지 변경 요청하기
  const onModifyImage = () => {
    if (!accountForm.image) {
      alert("이미지를 먼저 선택해주세요.");
      return;
    }

    // 이미지를 업로드하는 부분
    const imageForm = {
      file: accountForm.image,
    };

    modifyMyImage(imageForm)
      .then((response) => {
        console.log("이미지 업로드 성공", response);
        alert("이미지가 성공적으로 업로드되었습니다.");
        navigate("/mypage");
      })
      .catch((error) => {
        console.error("이미지 업로드 실패", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      });
  };

  //프로필 변경 요청하기
  const onModifySubmit = (e) => {
    e.preventDefault();
    if (window.confirm("정보를 수정하시겠습니까?")) {
      //닉네임 변경하기
    }
  };

  return (
    <div className='account-modify-container'>
      <div className='account-modify-title'>정보 수정</div>
      {accountForm.image ? (
        <div>
          <img
            className='mypage_profile_image'
            src={accountForm.image}
            alt='프로필 이미지'
          />
          <p className='image-modify-button' onClick={modifyImage}>
            <IoIosCamera />
          </p>
        </div>
      ) : profile.imageUrl !== null ? (
        <div>
          <img
            className='mypage_profile_image'
            src={profile.imageUrl}
            alt='프로필 이미지'
          />
          <p className='image-modify-button' onClick={modifyImage}>
            <IoIosCamera />
          </p>
        </div>
      ) : (
        <div>
          <img
            className='mypage_profile_image'
            src={anonymous_profile}
            alt='익명 프로필 이미지'
          />
          <p className='image-modify-button' onClick={modifyImage}>
            <IoIosCamera />
          </p>
        </div>
      )}
      {showFileInput && ( //사진 첨부 input
        <input
          className='profile-image-upload'
          type='file'
          id='upload-image'
          accept='image/*'
          onChange={handleFileSelect}
        />
      )}

      <div className='profile_nickname-box'>
        {accountForm.nickname ? (
          <div>
            <input
              className='nickname-input'
              type='text'
              id='nickname'
              name='nickname'
              required
              placeholder={profile.nickname}
              value={accountForm.nickname}
              onChange={onFormChange}
            />
            <p
              className='nickname-modify-button-click'
              onClick={modifyNickname}
            >
              <AiOutlineEdit />
            </p>
          </div>
        ) : (
          <div>
            <p className='profile_nickname'>{profile.nickname}</p>
            <p
              className='nickname-modify-button-unclick'
              onClick={modifyNickname}
            >
              <AiOutlineEdit />
            </p>
          </div>
        )}
      </div>

      <div className='profile_email'>{profile.email}</div>
      <div className='profile-modify-input'>
        <div className='profile-modify-box'>
          <p className='profile-modify-text'>비밀번호</p>
          <input
            className='profile-password'
            type='text'
            id='password'
            name='password'
            required
            placeholder=''
            value={accountForm.password}
            onChange={onFormChange}
          />
        </div>

        <div className='profile-modify-box'>
          <p className='profile-modify-text'>이름</p>
          <input
            className='profile-name'
            type='text'
            id='name'
            name='name'
            required
            placeholder={profile.name}
            value={accountForm.name}
            onChange={onFormChange}
          />
        </div>
      </div>
      <button
        className='profile-modify-submit'
        type='submit'
        onClick={onModifySubmit}
      >
        수정 완료
      </button>
    </div>
  );
};

export default AccountModify;
