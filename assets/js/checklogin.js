/* Formulaire fictif de connexion */
// => fonctionne avec un utilisateur créé en dur ci dessous - ne parvient pas encore à intégrer le fetch des utilisateurs.
const users = [
    {
        id: 1,
        UserName: 'John',
        email: 'john@john.com',
        psd : 'admin1234'
    }
]
// => le fetch fonctionne, les utilisateurs sont bien récupérés, mais les données reçues ne passent pas en array pour être utilisables dans le forEach de la fonction CheckAuth

// async function fetchUsers() {
//    await fetch( `../../assets/js/users.json` )
//    .then( ( response ) => {
//        if ( response.status == 200 ) {
//            users = response.json();
           
//            console.log( " users in promise", users )
//            return users;
//        } else {
//            console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
//            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
//            console.info( "État de la réponse users:", response );
//        }
//        return response.text();
//    } )
//    .then( ( users ) => {
//       checkAuth(users)
//        })
//    .catch( function ( error ) {
//        if ( error.apiTypes ) {
//            console.log( error.users.data );
//            console.log( error.users.status );
//            console.log( error.users.headers );
//        } else if ( error.request ) {
//            console.log( error.request );
//        } else {
//            console.log( 'Error', error.message );
//        }
//        console.log( error.config );
//    } );
// }

// pour l'authentification
const userInPsd = document.querySelector( "#psdCo" )
const userInEmail = document.querySelector( "#emailId" );


// Authentitfication
const checkAuthBtn = document.querySelector( "#checkAuthBtn" );
checkAuthBtn.addEventListener( "click", checkAuth );

// acces inscription
const signInBtn = document.querySelector( "#signInBtn" );
signInBtn.addEventListener( "click", signIn );


// fonction de vérification de l'authentification
function checkAuth( emailIn, psdIn,users ) {
    emailIn = userInEmail.value;
    console.log( "emailIn", emailIn );
    psdIn = userInPsd.value;
    console.log( "psdIn", psdIn );
    users.forEach( ( user ) => {
        if (( emailIn == user.email ) && ( psdIn == user.psd )) {
            localStorage.setItem( "authAccess", "allowedAccess" );
            document.location( "/mon-compte.html" );
    } else {
        alert( "accès interdit" );
    }
    })
}

// fonction d'appel de la page d'inscription
function signIn() {
    //window.open( "/signin.html" );
    document.open( "/signin.html" );
}




/*
//async function fetchUsers() {
//    await fetch( `../../assets/js/users.json` )
//    .then( ( response ) => {
//        if ( response.status == 200 ) {
//            users = response.json();
//            
//            console.log( " users in promise", users )
//            return users;
//        } else {
//            console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
//            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
//            console.info( "État de la réponse users:", response );
//        }
//        return response.text();
//    } )
//    .then( ( users ) => {
//        let array = users.JSON.parse("");
//        console.log( "array", array )
//        })
//    .catch( function ( error ) {
//        if ( error.apiTypes ) {
//            console.log( error.users.data );
//            console.log( error.users.status );
//            console.log( error.users.headers );
//        } else if ( error.request ) {
//            console.log( error.request );
//        } else {
//            console.log( 'Error', error.message );
//        }
//        console.log( error.config );
//    } );
//}
//
//
//
//// pour l'authentification
//const userInPsd = document.querySelector( "#psdCo" )
//const userInEmail = document.querySelector( "#emailId" );
//
//// Authentitfication
//const checkAuthBtn = document.querySelector( "#checkAuthBtn" );
//
//
//
//// fonction de vérification de l'authentification
//// function checkAuth( emailIn, psdIn, users ) {
////     emailIn = userInEmail.value;
////     psdIn = userInPsd.value;
////     console.log("dans la fonction checkauth", users)
////     users.forEach( ( user ) => {
////         /* console.log( "useru", user ); */
////         if (( emailIn == user.email ) && ( psdIn == user.psd )) {
////             localStorage.setItem( "authAccess", "allowedAccess" );
////            alert( "toto" );
////             // window.open( "/mon-compte.html" );
////            //document.location
////     } else {
////         alert( "accès interdit" );
////     }
////     } )
//// }
//
//// fonction d'appel de la page d'inscription
//function signIn() {
//    window.open( "/signin.html" );
//}
//
//// fonction qui crée la liste des utilisateurs existants
//// let createExistingUserList = ( users ) =>{
////     return users = (
////     users.forEach( ( user ) => {
////         let existingUsers = [ user.email, user.psd ];
////         console.log( `utilisateur avec l'id ${ user.id } issu du fecth : `, existingUsers );
////     } ))
//// }
//
//// fetchUsers().then( () => {
////     users => checkAuth( users )
//// } 
//// );
//
//fetchUsers().then( ( users ) = () => {
//        checkAuthBtn.addEventListener( "click", (users) => {
//            emailIn = userInEmail.value;
//            psdIn = userInPsd.value;
//            console.log("dans la fonction checkauth", users)
//            users.forEach( ( user ) => {
//                /* console.log( "useru", user ); */
//                if (( emailIn == user.email ) && ( psdIn == user.psd )) {
//                    localStorage.setItem( "authAccess", "allowedAccess" );
//                   alert( "toto" );
//                    // window.open( "/mon-compte.html" );
//                   //document.location
//            } else {
//                alert( "accès interdit" );
//            }
//            } )
//        })
//    }
//);
//
//
// */
