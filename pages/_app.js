import "../styles/globals.css";
import { RecoilRoot } from "recoil"; //追加

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
