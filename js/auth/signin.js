const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "admin@mail.com" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "123";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }

    if(mailInput.value == "employe@mail.com" && passwordInput.value == "staff1"){
        //Il faudra récupérer le vrai token
        const token = "staff";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "employe", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }

    if(mailInput.value == "veto@mail.com" && passwordInput.value == "vet1"){
        //Il faudra récupérer le vrai token
        const token = "123";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "vet", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }



}