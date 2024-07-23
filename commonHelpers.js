import{a as b,i as a,S as m}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const v="44811983-8684438ea32399a5b651fd4bf",L="https://pixabay.com/api/";async function f(t,o=1,n=15){const r={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n};try{const e=await b.get(L,{params:r});return{images:e.data.hits,total:e.data.totalHits}}catch{throw new Error("Error fetching images from Pixabay API")}}function y(t){const o=document.querySelector(".gallery"),n=t.map(r=>`
    <a href="${r.largeImageURL}" class="image-card">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${r.likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${r.views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${r.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${r.downloads}
        </p>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",n)}function g(){const t=document.querySelector(".loader-container");t.style.display="block",t.innerHTML=`
    <div class="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `}function p(){const t=document.querySelector(".loader-container");t.style.display="none",t.innerHTML=""}function h(){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function w(){const t=document.querySelector(".gallery .image-card");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}let l=1,u="",c=0,i=0;document.querySelector(".form").addEventListener("submit",async function(t){t.preventDefault();const o=document.querySelector('input[name="delay"]'),n=o.value.trim();if(n===""){a.error({title:"Error",message:"Search query cannot be empty!"});return}u=n,l=1,i=0,g(),document.querySelector(".gallery").innerHTML="",document.getElementById("load-more").style.display="none";try{const{images:r,total:e}=await f(u,l);c=e,i+=r.length,y(r),new m(".gallery a").refresh(),a.success({title:"Success",message:`✅ Found ${r.length} images for "${n}"`}),r.length>0&&i<c&&(document.getElementById("load-more").style.display="block"),i>=c&&h()}catch(r){a.error({title:"Error",message:`❌ ${r.message}`})}finally{p()}o.value=""});document.getElementById("load-more").addEventListener("click",async function(){l+=1,g();try{const{images:t}=await f(u,l);i+=t.length,y(t),w(),new m(".gallery a").refresh(),i>=c&&(document.getElementById("load-more").style.display="none",h())}catch(t){a.error({title:"Error",message:`❌ ${t.message}`})}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
