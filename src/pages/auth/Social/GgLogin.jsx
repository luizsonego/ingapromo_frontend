import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const GgLogin = () => {
  let navigate = useNavigate();

  const loginUserGoogle = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_API}/site/oauth`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem(
          process.env.REACT_APP_ACCESS_TOKEN,
          response.data.token.token
        );
        localStorage.setItem(
          process.env.REACT_APP_NAMED_USER,
          response.data.token.user_id
        );
      })
      .catch((error) => console.error(error));
  };

  const { isLoading, mutate } = useMutation(loginUserGoogle, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleLoginGoogle = (data) => {
    mutate(data);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <LoginSocialGoogle
      client_id={process.env.REACT_APP_GOOGLE_APP_ID}
      onResolve={handleLoginGoogle}
      onReject={handleSocialLoginFailure}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      className="mt-5"
    >
      <GoogleLoginButton
        text={isLoading ? "Loading..." : "Login com Google"}
        style={{ "background": "transparent", "padding": "20px" }}
      />
    </LoginSocialGoogle>
  );
};

export default GgLogin;
