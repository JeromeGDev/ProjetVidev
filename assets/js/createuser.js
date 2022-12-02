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



// pour l'authentification
const userInPsd = document.querySelector( "#psdCo" )
const userInEmail = document.querySelector( "#emailId" );

// pour l'inscription
const newNameId = document.querySelector( "#newNameId" );
const newPsdId = document.querySelector( "#newPsdId" )
const userEmailId = document.querySelector( "#userEmailId" );

// Authentitfication
const checkAuthBtn = document.querySelector( "#checkAuthBtn" );
checkAuthBtn.addEventListener( "click", checkAuth );

// acces inscription
const signInBtn = document.querySelector( "#signInBtn" );
signInBtn.addEventListener( "click", signIn );

// valider formulaire inscription
const validateSignInBtn = document.querySelector( "#validateSignInBtn" );
validateSignInBtn.addEventListener( "click", inscription( id, UserName, email, psd ) );

// fonction de vérification de l'authentification
function checkAuth( emailIn, psdIn ) {
    emailIn = userInEmail.value;
    console.log( "emailIn", emailIn );
    psdIn = userInPsd.value;
    console.log( "psdIn", psdIn );
    users.forEach( ( user ) => {
        if (( emailIn == user.email ) && ( psdIn == user.psd )) {
            localStorage.setItem( "authAccess", "allowedAccess" );
            window.open( "/mon-compte.html" );
    } else {
        alert( "accès interdit" );
    }
    })
}

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

fetchUsers()
