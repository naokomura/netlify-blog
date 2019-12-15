import React from 'react'
import { Helmet } from 'react-helmet'

export default () => {
  const webfont = `
  (function(d) {
    var config = {
      kitId: 'mwe2mhl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  `

  return (
    <Helmet>
      <html lang="ja" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script>{webfont}</script>
      <link rel="stylesheet" href="https://use.typekit.net/cak8saa.css" />
    </Helmet>
  )
}