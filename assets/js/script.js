/* =================================== HEADER ===================================*/
// Sélection cu conteur de nav
let navContainer = document.querySelector( ".navContainer" );

// Sélection du menu Burger
let btnBurger = document.querySelector( ".btnBurger" );

// Sélection de la croix de fermeture de la nav
let btnClose = document.querySelector( ".btnClose" );

// Masque la nav au démarrage
navContainer.classList.add( "isHidden" );

// Toggle de la nav :
// à partir du bouton burger
btnBurger.addEventListener( "click", toggleNav );

// à partir du bouton croix
btnClose.addEventListener( "click", toggleNav );

// fonction de toggle de la nav
function toggleNav(){
    navContainer.classList.toggle( "isHidden" );
}



// Récupération des liens du fichier links.json a insérer dans le menu
async function fetchLinks() {
    fetch( `../../assets/js/links.json` )
    .then( ( response ) => {
        if ( response.status == 200 ) {
            console.log("le fichier .json contenant la liste des série à importer existe bien");
            console.log("et ci-dessous, résultat de l'appel du fichier json :");        
            console.info( "Statut de la requête linksList", response.status );
            linksList = response.json();
            console.log( " linksList ", [ linksList ] )
            return linksList;
        } else {
            console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
            console.info( "État de la réponse linksList:", response );
        }
        return response.text();
    } )
    .then( ( links ) => {
        menuConstruct( links )
    } )
    .catch( function ( error ) {
        if ( error.apiTypes ) {
            console.log( error.linksList.data );
            console.log( error.linksList.status );
            console.log( error.linksList.headers );
        } else if ( error.request ) {
            console.log( error.request );
        } else {
            console.log( 'Error', error.message );
        }
        console.log( error.config );
    } );
}
function menuConstruct(links) {
    const navContainer = document.querySelector( ".navContainer__ul" );
    links.forEach( (link) => {
    const liLinkContainer = document.createElement( "li" );
    liLinkContainer.setAttribute( "class", "navContainer__ul__li" );

    const navLink = document.createElement( "a" );
    
    navLink.setAttribute( "class", "btn__nav" );
    
    navLink.setAttribute( "href", `/${link.href}` );
    
    navLink.setAttribute( "title", link.title );
    navLink.innerText = link.title;

    liLinkContainer.appendChild( navLink );
    navContainer.appendChild( liLinkContainer );
    
});
}
fetchLinks()
//menuConstruct()
