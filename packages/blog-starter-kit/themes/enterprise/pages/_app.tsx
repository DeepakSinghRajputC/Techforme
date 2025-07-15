import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/index.css';
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);
	 return (
    <>
      {/* ── 1) External Adsterra script ── */}
      <Script
		    async
        src="//pl27172667.profitableratecpm.com/9b/5d/07/9b5d07c3a41f5910dae525fec5997c75.js"
        strategy="afterInteractive"
      />

      {/* ── 2) Inline init (if needed) ── */} 
      {/* <Script id="adsterra-init" strategy="afterInteractive">
        {`
          // TODO: paste your Adsterra inline snippet here, e.g.:
          // window.adsterra = window.adsterra || [];
          // adsterra.push({ ... });
        `}
      </Script> */}

      {/* ── 3) Your app's main content ── */}
      <Component {...pageProps} />
    </>
}
