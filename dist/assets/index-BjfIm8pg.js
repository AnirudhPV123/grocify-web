(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let r=document.getElementById("menu-icon"),d=document.getElementById("close-icon"),l=document.getElementById("menu-links"),u=document.getElementById("menu-links-container");r.onclick=function(){document.getElementById("menu-links").style.right=0};l.onclick=function(){};u.onclick=function(){};d.onclick=function(){document.getElementById("menu-links").style.right="-50%"};document.onclick=function(n){!r.contains(n.target)&&!l.contains(n.target)&&(document.getElementById("menu-links").style.right="-50%")};u.onclick=function(){document.getElementById("menu-links").style.right="-50%"};
