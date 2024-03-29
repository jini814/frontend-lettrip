import { API_BASE_URL } from "../Constant/backendAPI";
import { request } from "./APIService";

export function createMeetUp(meetUpForm) {
  return request({
    url: API_BASE_URL + "/api/meetUp/create",
    method: "POST",
    body: JSON.stringify(meetUpForm),
  });
} //만남 약속 생성하기

export function cancelMeetUp(meetUpId) {
  return request({
    url: API_BASE_URL + "/api/meetUp/cancel/" + meetUpId,
    method: "GET",
  });
} //만남 약속 취소하기

export function sendMeetUpCode(meetUpId) {
  return request({
    url: API_BASE_URL + "/api/meetUp/meetUp-code/" + meetUpId,
    method: "GET",
  });
} //만남 약속 인증 코드 요청

export function verifyMeetUp(verifyForm) {
  return request({
    url: API_BASE_URL + "/api/meetUp/meetUp-verify",
    method: "POST",
    body: JSON.stringify(verifyForm),
  });
} //만남 약속 인증 요청

export function showMeetUp(meetUpId) {
  return request({
    url: API_BASE_URL + "/api/meetUp/" + meetUpId,
    method: "GET",
  });
} //만남 조회 요청

class AuthService {}
export default new AuthService();
