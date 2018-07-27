var config={buttonControlId:"ad-control",popupId:"ad-content",popupIframeId:"ad-content-iframe",popupIframeSrc:"https://shion-test.herokuapp.com/sony",popupIframeOrigin:"https://shion-test.herokuapp.com",cookieKey:"sony-show",cookieLaterMsg:"sony-show-later",cookieLaterKey:"1",cookieLaterExpired:1,cookieSubmitMsg:"sony-show-submit",cookieSubmitKey:"2",cookieSubmitExpired:60},adControl=document.getElementById(config.buttonControlId),css={"#ad-control":{width:"45px",height:"45px",position:"fixed",right:"0",bottom:"40px","z-index":"9999",display:"block",cursor:"pointer","background-color":"#ff9601",transition:"width 1s"},"#ad-control:hover":{width:"120px"},"#ad-content":{display:"none",position:"fixed","z-index":"1","padding-top":"100px",left:"0",top:"0",width:"100%",height:"100%",overflow:"auto","text-align":"center","background-color":"rgb(0, 0, 0)","background-color":"rgba(0, 0, 0, 0.4)"},"#ad-content-iframe":{position:"relative","background-color":"#fefefe",margin:"auto",padding:"0",border:"1px solid #888",width:"1200px",height:"200px","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","-webkit-animation-name":"animatetop","-webkit-animation-duration":"0.4s","animation-name":"animatetop","animation-duration":"0.4"}},parseCssToString=function(e){for(var o="",t=Object.keys(e),i=0;i<t.length;i++){var n=t[i],r=e[n];o=o+n+" "+JSON.stringify(r)+" "}return o=(o=o.replace(/",/g,";")).replace(/"/g,"")},setupCss=function(){var e=parseCssToString(css),o=document.createElement("style");o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(o)},setupPopup=function(){var e=document.createElement("div");e.setAttribute("id",config.popupId),document.getElementsByTagName("body")[0].appendChild(e);var o=document.createElement("iframe");o.setAttribute("id",config.popupIframeId),o.src=config.popupIframeSrc,e.appendChild(o),adControl.style.display="none",e.style.display="block"},receiveMessage=function(e){if(e.origin===config.popupIframeOrigin){var o=e.data,t=document.getElementById(config.popupId);o===config.cookieLaterMsg?(t.parentNode.removeChild(t),adControl.style.display="block",setCookie(config.cookieKey,config.cookieLaterKey,config.cookieLaterExpired)):o===config.cookieSubmitMsg&&(t.parentNode.removeChild(t),setCookie(config.cookieKey,config.cookieSubmitKey,config.cookieSubmitExpired))}},setupControl=function(){adControl.addEventListener("click",function(){setupPopup()});var e=getCookie(config.cookieKey);e===config.cookieSubmitKey?adControl.style.display="none":e!==config.cookieLaterKey&&setTimeout(function(){setupPopup()},2e3)},setCookie=function(e,o,t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=e+"="+o+";"+n},getCookie=function(e){for(var o=e+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var n=t[i];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""};window.addEventListener("message",receiveMessage,!1),setupCss(),setupControl();
