import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "@/components";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700,1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-200">
        <Main />
        <NextScript />
        
        {/* Hotjar Script */}
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5176729,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Google analytics*/}
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9Z6ND3SGJC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9Z6ND3SGJC');
        `}
      </Script>
      </body>
    </Html>
  );
}
