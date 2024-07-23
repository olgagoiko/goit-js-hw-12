import{a as b,i as a,S as m}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const v="44811983-8684438ea32399a5b651fd4bf",L="https://pixabay.com/api/";async function f(t,o=1,s=15){const r={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s};try{const e=await b.get(L,{params:r});return{images:e.data.hits,total:e.data.totalHits}}catch{throw new Error("Error fetching images from Pixabay API")}}function y(t){const o=document.querySelector(".gallery"),s=t.map(r=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",s),console.log("SimpleLightbox initialized:",new SimpleLightbox(".gallery a"))}function g(){const t=document.querySelector(".loader-container");t.style.display="block",t.innerHTML=`
    <div class="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `}function p(){const t=document.querySelector(".loader-container");t.style.display="none",t.innerHTML=""}function h(){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function w(){const t=document.querySelector(".gallery .image-card");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}let c=1,u="",l=0,i=0;document.querySelector(".form").addEventListener("submit",async function(t){t.preventDefault();const o=document.querySelector('input[name="delay"]'),s=o.value.trim();if(s===""){a.error({title:"Error",message:"Search query cannot be empty!"});return}u=s,c=1,i=0,g(),document.querySelector(".gallery").innerHTML="",document.getElementById("load-more").style.display="none";try{const{images:r,total:e}=await f(u,c);l=e,i+=r.length,y(r),new m(".gallery a").refresh(),a.success({title:"Success",message:`✅ Found ${r.length} images for "${s}"`}),r.length>0&&i<l&&(document.getElementById("load-more").style.display="block"),i>=l&&h()}catch(r){a.error({title:"Error",message:`❌ ${r.message}`})}finally{p()}o.value=""});document.getElementById("load-more").addEventListener("click",async function(){c+=1,g();try{const{images:t}=await f(u,c);i+=t.length,y(t),w(),new m(".gallery a").refresh(),i>=l&&(document.getElementById("load-more").style.display="none",h())}catch(t){a.error({title:"Error",message:`❌ ${t.message}`})}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
