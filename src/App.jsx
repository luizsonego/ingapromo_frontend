import { QueryClientProvider } from "react-query";
import { queryClient } from "./clientProvider";
import MainRouter from "./routes";


function App() {
  return (
    <>
      {/* <Helmet> */}
        {/* <script src="https://runtime.imagekit.io/0gr1w07bzr6iu/v1/js/network-based-adaption.js?v=" type="text/javascript" /> */}
      {/* </Helmet> */}
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <MainRouter />
      </div>
    </QueryClientProvider>
    </>
  );
}

export default App;
