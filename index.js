const mainH1 = document.querySelector('.header-h1')
mainH1.addEventListener("click", event => {
    event.target.style.color = 'purple';

    setTimeout(function() {
        event.target.style.color = 'salmon'
    },1000)
});