document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
const btn=document.querySelector('.copy');const toast=document.querySelector('#toast');
if(btn)btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy)}catch(e){const x=document.createElement('textarea');x.value=btn.dataset.copy;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1600)});


// Smoothly shuffle the word after "made for your" in the hero.
const heroWord = document.getElementById('hero-word');
if (heroWord) {
  const words = ['server.', 'community.', 'project.', 'vision.', 'idea.'];
  let i = 0;
  setInterval(() => {
    heroWord.classList.remove('swap-in');
    heroWord.classList.add('swap-out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      heroWord.textContent = words[i];
      heroWord.classList.remove('swap-out');
      heroWord.classList.add('swap-in');
    }, 260);
  }, 2600);
}
