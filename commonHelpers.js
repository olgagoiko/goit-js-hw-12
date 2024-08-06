import{a as S,i as l,S as p}from"./assets/vendor-BPs2jpei.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const v="44811983-8684438ea32399a5b651fd4bf",I="https://pixabay.com/api/";async function g(r,n=1,t=15){const o={key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:t};try{const e=await S.get(I,{params:o});return{images:e.data.hits,total:e.data.totalHits}}catch{throw new Error("Error fetching images from Pixabay API")}}const $=document.querySelector(".gallery"),m=document.querySelector(".loader-container"),h=document.querySelector(".loader"),y=document.querySelector(".gallery .image-card");function b(r){const n=r.map(t=>`
    <a href="${t.largeImageURL}" class="image-card">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${t.likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${t.views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${t.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${t.downloads}
        </p>
      </div>
    </a>
  `).join("");$.insertAdjacentHTML("beforeend",n)}function L(){m.style.display="block",h.style.display="block"}function w(){m.style.display="none",m.innerHTML="",h.style.display="none"}function E(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function q(){if(y){const r=y.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}let d=1,f="",c=0,i=0,a;document.querySelector(".form").addEventListener("submit",async function(r){r.preventDefault();const n=document.querySelector('input[name="delay"]'),t=n.value.trim();if(t===""){l.error({title:"Error",message:"Search query cannot be empty!"});return}f=t,d=1,i=0,L(),document.querySelector(".gallery").innerHTML="",document.getElementById("load-more").style.display="none";try{const{images:o,total:e}=await g(f,d);c=e,i+=o.length,b(o),a&&a.destroy(),a=new p(".gallery a"),a.refresh(),l.success({title:"Success",message:`✅ Found ${o.length} images for "${t}"`}),o.length>0&&i<c&&(document.getElementById("load-more").style.display="block"),i>=c&&E()}catch(o){l.error({title:"Error",message:`❌ ${o.message}`})}finally{w()}n.value=""});document.getElementById("load-more").addEventListener("click",async function(){d+=1,L();try{const{images:r}=await g(f,d);i+=r.length,b(r),q(),a?a.refresh():a=new p(".gallery a"),i>=c&&(document.getElementById("load-more").style.display="none",E())}catch(r){l.error({title:"Error",message:`❌ ${r.message}`})}finally{w()}});
//# sourceMappingURL=commonHelpers.js.map
