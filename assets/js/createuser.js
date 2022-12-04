// const users = [
//     {
//         id: 1,
//         UserName: 'John',
//         email: 'john@john.com',
//         psd : 'admin1234'
//     }
// ]

async function fetchUsers() {
    fetch( `../../assets/js/users.json` )
    .then( ( response ) => {
        if ( response.status == 200 ) {
            console.log("le fichier .json contenant la liste des série à importer existe bien");
            console.log("et ci-dessous, résultat de l'appel du fichier json :");        
            console.info( "Statut de la requête usersList", response.status );
            usersList = response.json();
            console.log( " usersList ", [ usersList ] )
            return usersList;
        } else {
            console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
            console.info( "État de la réponse usersList:", response );
        }
        return response.text();
    } )
    .then( ( result ) => {
        checkAuth( result )
    } )
    .catch( function ( error ) {
        if ( error.apiTypes ) {
            console.log( error.usersList.data );
            console.log( error.usersList.status );
            console.log( error.usersList.headers );
        } else if ( error.request ) {
            console.log( error.request );
        } else {
            console.log( 'Error', error.message );
        }
        console.log( error.config );
    } );
}





// pour l'inscription
const newNameId = document.querySelector( "#newNameId" );
const newPsdId = document.querySelector( "#newPsdId" )
const userEmailId = document.querySelector( "#userEmailId" );

// acces inscription
const signInBtn = document.querySelector( "#signInBtn" );
signInBtn.addEventListener( "click", signIn );

// valider formulaire inscription
const validateSignInBtn = document.querySelector( "#validateSignInBtn" );
validateSignInBtn.addEventListener( "click", () => {
    if (checkForm() === true) {
        inscription( id, UserName, email, psd ) // manque une sécurité pour éviter une attaque par injection xss
    } else {
    alert( "formulaire rempli de manière incorrecte" );
}
});


// fonction d'appel de la page d'inscription
function signIn() {
    window.open( "/signin.html" );
}


// fonction de construction d'un nouvel utilisateur
function inscription(id,UserName,email,psd) {

    let userToAdd = {};
    class userConstruct {
        constructor( id, UserName, email, psd ) {
            this.id = id,
            this.UserName = UserName,
            this.email = email,
            this.psd = psd
        }
    }


    id = Number(users.length++);
    console.log( "id", id );

    userToAdd = new userConstruct( id, UserName, email, psd );
    

    nameIn = newNameId.value;
    console.log( "emailIn", emailIn );
    userToAdd.UserName = nameIn;

    emailIn = userEmailId.value;
    console.log( "emailIn", emailIn );
    userToAdd.email = emailIn;

    psdIn = newPsdId.value;
    console.log( "psdIn", psdIn );
    userToAdd.psd = psdIn;

    users.push.userToAdd = (id,UserName,email,psd)
}

// fonction de vérification du formulaire d'inscription
function checkForm() {
    let UserName = document.forms["RegForm"]["Nom"];               
    let email = document.forms["RegForm"]["Email"];    
    let psd = document.forms["RegForm"]["Mot de passe"];  

    if (UserName.value == "") { 
        alert("Mettez votre nom."); 
        UserName.focus(); 
        return false; 
    }    
    if (email.value == "") { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0) { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0) { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (psd.value == "") { 
        alert("Saisissez votre mot de passe"); 
        psd.focus(); 
        return false; 
    }    
    return true; 
}



fetchUsers()

