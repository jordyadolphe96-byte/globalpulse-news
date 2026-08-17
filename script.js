const theme=document.getElementById('theme');
theme.addEventListener('click',()=>document.body.classList.toggle('light'));

function subscribe(e){
  e.preventDefault();
  const msg=document.getElementById('form-msg');
  msg.textContent='Thanks — newsletter signup is ready for connection to your email service.';
  e.target.reset();
}

document.querySelectorAll('.menu').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.querySelector('.nav nav');
    nav.style.display=nav.style.display==='flex'?'none':'flex';
    nav.style.position='absolute'; nav.style.top='72px'; nav.style.left='0';
    nav.style.right='0'; nav.style.padding='20px'; nav.style.background='#0a0f1e';
    nav.style.flexDirection='column';
  });
});
