import React, { useState, useEffect } from "react";
import moment from "moment"; //날짜 설정하는 라이브러리
import "moment/locale/ko";
import anonymous_profile from "../../../image/lettrip_anonymous_profile.png"; //프로필 이미지
import styles from "./Chatting.module.css";

function ChatList({ chatRooms, onClickChatRoom }) {
  useEffect(() => {
    console.log(chatRooms);
  }, []);

  //해당 채팅방 클릭했을 시
  const handleChatRoomClick = (room) => {
    onClickChatRoom(room); //채팅방 생성 -> container 전송
    console.log("채팅방 입장");
  };

  //채팅방 목록 날짜 및 시간 표시 방법 수정
  const formatDateTime = (time) => {
    const momentTime = moment(time);
    const currentTime = moment();
    const diffDays = momentTime.diff(currentTime, "days");

    if (momentTime.isSame(currentTime, "day")) {
      return momentTime.format("a h:mm");
    } else if (diffDays === -1) {
      return "어제";
    } else {
      return momentTime.format("M월 D일");
    }
  };

  // 이미지 URL 여부 확인 및 렌더링 함수
  const renderLastMessage = (message) => {
    if (message && message.startsWith("https")) {
      // 이미지 URL인 경우
      return "사진";
    } else {
      // 일반 텍스트인 경우
      return message;
    }
  };

  return (
    <div className={styles.chatListContainer}>
      {chatRooms.map((room, index) => (
        <div
          className={styles.chatList}
          key={index}
          onClick={() => handleChatRoomClick(room)}
        >
          <img
            className={styles.listProfileImg}
            src={room.participant.imageUrl || anonymous_profile}
          />

          <div className={styles.listInfo}>
            <p className={styles.listNickname}>{room.participant.nickname}</p>
            <p className={styles.listMessage}>
              {renderLastMessage(room.lastMessage)}
            </p>
          </div>
          <p className={styles.listTime}>
            {formatDateTime(room.lastMessageTime)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
