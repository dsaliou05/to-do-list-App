// Variables
let  btn ,input, list, p , i , ErrorText , inputValue , counter , a;


btn = document.getElementById("btn");
list = document.getElementById("employ-list");
input = document.getElementById("uname");
p = document.getElementsByTagName("p");
ErrorText = document.getElementById("ErrorText");
counter = document.getElementById("counter");
a = 0;

// CHARGEMENT PRELOADER

let loader = document.getElementById("preloader"); 
window.addEventListener("load" , () => {
    loader.style.display = "none"
}) 

// LE MODAL S'OUVRE SI L'UTILISATEUR N'EST PAS CONNECTER 
let offSignal = document.getElementById("off")
window.addEventListener("offline", () => {
    offSignal.style.display = "block"
  
})

//ON FERME LE MODAL SI ON CLIQUE EN DEHORS DE LA BOITE
window.onclick = function(e) {
    if (e.target == offSignal) {
        offSignal.style.display = "none"
    }
}


// ON FERME LE MODAL SI ON CLIQUE SUR LE BUTTON CLOSE
let closeX = document.getElementById("icon-delete");
closeX.onclick = (e) => {
    offSignal.style.display = "none"
}





// ON AJOUTE UN BUTTON RESET A NOS ELEMENTS P
for (i = 0; i < p.length; i++) {
    let span = document.createElement("span");
    span.className = "close";
    let txtSpan = document.createTextNode("\u00D7");
    span.appendChild(txtSpan);
    p[i].appendChild(span)
}



//ON SUPRRIME LES parentElement SI ON CLIQUE SUR LE BUTTON CLOSE
let del = document.getElementsByClassName("close");
for (i = 0; i < del.length; i++) {
     const xdel = del[i];
     xdel.onclick = function ()  {
        let x = this.parentElement
        x.remove()
    }
}


//  ON AJOUTE LES NOUVEAUX EMPLOYES SI CLICK SUR LE BUTTON AJOUTER
function addEmploy() {
  
    let p = document.createElement("p");
    let inputValue = input.value;
    let t = document.createTextNode(inputValue);
    p.appendChild(t);
    if(inputValue.length <= 0) {
        ErrorText.innerHTML = "Vous devrez remplir ce champs de saisie";
        return false;
    }
    if (inputValue.length <= 2) {
        ErrorText.innerHTML = "Ce champs devrez minimun comporter deux caractères";
        return false;
    }

   
    else {
        ErrorText.innerHTML = "";
        list.appendChild(p);
        // incrémente
        a++;
        counter.innerText = a;
    } 



    // ON RECREE DES BUTTONS CLOSE POUR LES NOUVEAUX ELEMENTS P
    let span = document.createElement("span");
    span.className = "close";
    let txtSpan = document.createTextNode("\u00D7");
    span.appendChild(txtSpan);
    p.appendChild(span)
    // ON SUPPRIME POUR LES NOUVEAUX ELEMENTS P QUI SONT AJOUTE
    for (i = 0; i < del.length; i++) {
        const xdel = del[i];
        xdel.onclick = function ()  {
           let x = this.parentElement;
           x.remove();
           a--;
           counter.innerText = a
       }
   }
}
 
// BUTTON TOUT SUPPRIMER
let deleteAll = document.getElementById("deleteI");

deleteAll.addEventListener("click" , function () {
    list.remove()
    // déincrementg
    a = a - a;
    counter.innerText = a;
})






