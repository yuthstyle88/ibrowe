(()=>{(()=>{function o(){return!!(window.document.documentMode&&navigator.userAgent.match(/\sTrident\/[4-7]\./))}document.addEventListener("DOMContentLoaded",function(){if(!o()&&document.querySelector("html").classList.contains("is-desktop")){let t=document.getElementById("interstitial"),i=document.querySelector("#interstitial .close");document.querySelectorAll(".download").forEach(function(e){e.addEventListener("click",function(d){let n=e.getAttribute("data-platform");n==="android"||n==="ios"||t.setAttribute("open","")})}),i?.addEventListener("click",function(){t.removeAttribute("open")})}})})();})();
