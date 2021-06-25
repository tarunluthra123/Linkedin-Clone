import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>LinkedIn</title>
                <link rel="icon" href="/linkedin_logo.png" type="image/png" />
                <meta property="og:title" content="LinkedIn Clone" />
                <meta
                    property="og:description"
                    content="Fully functional web responsive LinkedIn Clone with realtime updates and complete auth mechanisms."
                />
                <meta
                    property="og:url"
                    content="https://linkedin.tarunluthra.me/"
                />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:type" content="website" />

                <meta property="twitter:card" content="summary" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
