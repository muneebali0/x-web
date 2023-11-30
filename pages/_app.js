import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-calendar/dist/Calendar.css";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import { ContentContextState } from "../Hooks/ContentContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function MyApp({ Component, pageProps }) {
  const getStripePublicKey = () => {
    return loadStripe(
      "pk_test_51H5oCHABdULnSQcqFmpu4oUxHberEfwa6aJVF35aBTyGcBk9npyzoJAODJqG1KTHmE4o7Oc5UCO5AH3RREbJQnjX00h6i4cGM8"
    );
  };

  return (
    <>
      <Head>
        <title>X AIR</title>
      </Head>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        TransitionComponent={Slide}
        maxSnack={3}
      >
        <ContentContextState>
          <Elements stripe={getStripePublicKey()}>
            <Component {...pageProps} />
          </Elements>
        </ContentContextState>
      </SnackbarProvider>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <Script
        src="https://kit.fontawesome.com/e30259c958.js"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default MyApp;
