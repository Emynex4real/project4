const share = document.querySelector('.fa-share');
const end = document.getElementById('share');
const social = document.querySelector('.social')


share.addEventListener('click', ()=>{
    console.log('hello')
    social.classList.add('active')
})

end.addEventListener('click', ()=>{
    social.classList.remove('active')
})