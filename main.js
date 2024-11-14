const signUpButton = document.getElementById ("signUp");
const signInButton = document.getElementById ("sigIn");
const container = document.getElementById  ("container");

signInButton.addEventListener("click",()=> {
    container.classList.add("right-painel-active");});

    signInButton.addEventListener('click',()=> {
        container.classList.remove('right-painel-active');
    })


