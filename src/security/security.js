import {useNavigate} from "react-router-dom";

function useAuthenticationCheck(isAuthenticated) {
  let navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("login");
  }
}

function storeTokens({accessToken, refreshToken}) {
  storeAccessToken(accessToken);
  storeRefreshToken(refreshToken);
}

function storeAccessToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}
function storeRefreshToken(refreshToken) {
  localStorage.setItem("refreshToken", refreshToken);
}

export {useAuthenticationCheck, storeTokens};