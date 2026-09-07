function openModal(){document.getElementById('modal').classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function searchPlace(){const q=document.getElementById('heroSearch').value.trim(); if(q) alert('Ищем: '+q); document.getElementById('explore').scrollIntoView({behavior:'smooth'})}
function book(){alert('Спасибо! Заявка на бронирование отправлена.')}
function toggleLike(btn,e){e.preventDefault();e.stopPropagation();btn.classList.toggle('liked');btn.textContent=btn.classList.contains('liked')?'♥':'♡'}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()})
