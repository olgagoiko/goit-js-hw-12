import{i,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="44811983-8684438ea32399a5b651fd4bf",u="https://pixabay.com/api/";async function f(o){const s=`${u}?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,t=await fetch(s);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}function m(o){const s=document.querySelector(".gallery");s.innerHTML=o.map(t=>`
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
    `).join("")}function p(){const o=document.createElement("div");o.classList.add("loader"),o.innerHTML='<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',document.body.appendChild(o),console.log("Loader shown")}function c(){const o=document.querySelector(".lds-ring");o?(o.remove(),console.log("Loader hidden")):console.log("No loader found to hide")}document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const s=document.querySelector('input[name="delay"]'),t=s.value.trim();if(t===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}p(),f(t).then(n=>{const e=document.querySelector(".gallery");if(e.innerHTML="",n.length===0){i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}m(n),new l(".gallery a").refresh(),i.success({title:"Success",message:`✅ Found ${n.length} images for "${t}"`})}).catch(n=>{i.error({title:"Error",message:`❌ ${n.message}`})}).finally(()=>{c()}),s.value=""});
//# sourceMappingURL=commonHelpers.js.map
