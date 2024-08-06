import{a as v,i as l,S as y}from"./assets/vendor-BPs2jpei.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const E="44811983-8684438ea32399a5b651fd4bf",$="https://pixabay.com/api/";async function p(r,o=1,t=15){const s={key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:t};try{const e=await v.get($,{params:s});return{images:e.data.hits,total:e.data.totalHits}}catch{throw new Error("Error fetching images from Pixabay API")}}const q=document.querySelector(".gallery"),g=document.querySelector(".loader-container"),h=document.querySelector(".loader");function b(r){const o=r.map(t=>`
    <a href="${t.largeImageURL}" class="image-card">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p class="info-item">
          <b>Likes:</b> ${t.likes}
        </p>
        <p class="info-item">
          <b>Views:</b> ${t.views}
        </p>
        <p class="info-item">
          <b>Comments:</b> ${t.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b> ${t.downloads}
        </p>
      </div>
    </a>
  `).join("");q.insertAdjacentHTML("beforeend",o)}function w(){g.style.display="block",h.style.display="inline-grid"}function L(){g.style.display="none",h.style.display=""}function S(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function I(){const r=document.querySelector(".gallery .image-card");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({top:o*6,behavior:"smooth"})}}const P=document.querySelector(".gallery"),O=document.querySelector(".form"),d=document.getElementById("load-more");let u=1,m="",c=0,i=0,a;O.addEventListener("submit",async function(r){r.preventDefault();const o=document.querySelector('input[name="delay"]'),t=o.value.trim();if(t===""){l.error({title:"Error",message:"Search query cannot be empty!"});return}m=t,u=1,i=0,w(),P.innerHTML="",d.style.display="none";try{const{images:s,total:e}=await p(m,u);c=e,i+=s.length,b(s),a&&a.destroy(),a=new y(".gallery a"),a.refresh(),l.success({title:"Success",message:`✅ Found ${s.length} images for "${t}"`}),s.length>0&&i<c&&(d.style.display="block"),i>=c&&S()}catch(s){l.error({title:"Error",message:`❌ ${s.message}`})}finally{L()}o.value=""});d.addEventListener("click",async function(){u+=1,w();try{const{images:r}=await p(m,u);i+=r.length,b(r),I(),a?a.refresh():a=new y(".gallery a"),i>=c&&(d.style.display="none",S())}catch(r){l.error({title:"Error",message:`❌ ${r.message}`})}finally{L()}});
//# sourceMappingURL=commonHelpers.js.map
