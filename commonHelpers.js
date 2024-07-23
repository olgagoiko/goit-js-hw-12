import{a as v,i as l,S as f}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const L="44811983-8684438ea32399a5b651fd4bf",w="https://pixabay.com/api/";async function y(t,o=1,n=15){const r={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n};try{const e=await v.get(w,{params:r});return{images:e.data.hits,total:e.data.totalHits}}catch{throw new Error("Error fetching images from Pixabay API")}}function g(t){const o=document.querySelector(".gallery"),n=t.map(r=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",n)}function p(){const t=document.querySelector(".loader-container");t.style.display="block",t.innerHTML=`
    <div class="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `}function h(){const t=document.querySelector(".loader-container");t.style.display="none",t.innerHTML=""}function b(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function E(){const t=document.querySelector(".gallery .image-card");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}let d=1,m="",c=0,a=0,i;document.querySelector(".form").addEventListener("submit",async function(t){t.preventDefault();const o=document.querySelector('input[name="delay"]'),n=o.value.trim();if(n===""){l.error({title:"Error",message:"Search query cannot be empty!"});return}m=n,d=1,a=0,p(),document.querySelector(".gallery").innerHTML="",document.getElementById("load-more").style.display="none";try{const{images:r,total:e}=await y(m,d);c=e,a+=r.length,g(r),i&&i.destroy(),i=new f(".gallery a"),i.refresh(),l.success({title:"Success",message:`✅ Found ${r.length} images for "${n}"`}),r.length>0&&a<c&&(document.getElementById("load-more").style.display="block"),a>=c&&b()}catch(r){l.error({title:"Error",message:`❌ ${r.message}`})}finally{h()}o.value=""});document.getElementById("load-more").addEventListener("click",async function(){d+=1,p();try{const{images:t}=await y(m,d);a+=t.length,g(t),E(),i?i.refresh():i=new f(".gallery a"),a>=c&&(document.getElementById("load-more").style.display="none",b())}catch(t){l.error({title:"Error",message:`❌ ${t.message}`})}finally{h()}});
//# sourceMappingURL=commonHelpers.js.map
