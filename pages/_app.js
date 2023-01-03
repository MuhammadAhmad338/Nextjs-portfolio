import '../styles/globals.css';
import NavBar from '../components/navBar';


export default function App({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
  </>
}
