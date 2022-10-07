import SocialButton from "../../../components/SocialButton";

const handleSocialLogin = (user) => {
  console.log(user);
};

const handleSocialLoginFailure = (err) => {
  console.error(err);
};

const Github = () => {
  return (
    <SocialButton
            autoCleanUri
            provider='github'
            gatekeeper='http://localhost:9999'
            appId='6cb9732c58d43d830cd8'
            redirect='http://localhost:8080'
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
            key={'github'}
          >
            GitHub
          </SocialButton>
  )
}

export default Github