import Script from "next/script";

/**
 * Loads marketing & analytics tags only when their IDs are configured via env.
 * Nothing renders (and no third-party script loads) until you set the values
 * in `.env.local`, keeping the dev experience and Lighthouse score clean.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const HUBSPOT_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      {GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {/* Google Analytics 4 */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {/* LinkedIn Insight Tag */}
      {LINKEDIN_ID && (
        <>
          <Script id="linkedin-partner" strategy="afterInteractive">
            {`_linkedin_partner_id="${LINKEDIN_ID}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
          </Script>
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {CLARITY_ID && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}

      {/* HubSpot tracking + forms */}
      {HUBSPOT_ID && (
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`https://js.hs-scripts.com/${HUBSPOT_ID}.js`}
        />
      )}
    </>
  );
}

/** GTM noscript iframe — render inside <body> immediately after the opening tag. */
export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}
