import { gapi } from "gapi-script";
import { QueryClientProvider } from 'react-query';
import { queryClient } from './clientProvider';
import Wrapper from './helpers/wrapper';
import MainRouter from './routes';

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: `${process.env.REACT_APP_GOOGLE_APP_ID}`,
    plugin_name: "chat",
  });
});

function App() {
  return (
    <>
      {/* <Helmet> */}
      {/* <script src="https://runtime.imagekit.io/0gr1w07bzr6iu/v1/js/network-based-adaption.js?v=" type="text/javascript" /> */}
      {/* </Helmet> */}
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-100">
          <Wrapper>
            <MainRouter />
          </Wrapper>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
