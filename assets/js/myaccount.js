let authorisation = localStorage.getItem( "authAccess" );
function checkAccess() {
    if ( !authorisation || ( authorisation !== "allowedAccess" ) ) {
        alert("Vous n'avez pas le droit d'accéder à cette page")
    } else {
        fillAccount();
    }
}



const accountLinks = async function fetchLinksAccount() {
    fetch( `../../assets/js/linksAccount.json` )
    .then( ( response ) => {
        if ( response.status == 200 ) {
            console.log("le fichier .json contenant la liste des série à importer existe bien");
            console.log("et ci-dessous, résultat de l'appel du fichier json :");        
            console.info( "Statut de la requête linksList", response.status );
            linksList = response.json();
            console.log( " linksAccountList ", [ linksAccountList ] )
            return linksAccountList;
        } else {
            console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
            console.info( "État de la réponse linksList:", response );
        }
        return response.text();
    } )
    .then( ( linksAccount ) => {
        menuAcountConstruct( linksAccount )
    } )
    .catch( function ( error ) {
        if ( error.apiTypes ) {
            console.log( error.linksAccountList.data );
            console.log( error.linksAccountList.status );
            console.log( error.linksAccountList.headers );
        } else if ( error.request ) {
            console.log( error.request );
        } else {
            console.log( 'Error', error.message );
        }
        console.log( error.config );
    } );
}

 function fillAccount() {
    const containerToFill = document.querySelector( "#myAccountContent" );
    
     const header = document.createElement( "header" );
     header.setAttribute( "class", "headerTop" );

     const container = document.createElement( "div" );
     container.setAttribute( "class", "headerTop__ulBlock" );
     header.appendChild( container );

     const navAccount = document.createElement( "nav" );
     const navAccountBlock = document.createElement( "ul" );


     container.appendChild( navAccount );
     navAccount.appendChild( navAccountBlock );
     
     accountLinks.foreach( ( accountLink ) => {
        const navAccountLi = document.createElement( "li" );
         const navAccountLiLink = document.createElement( "a" );
         navAccountLiLink.setAttribute( "class", "btn__nav" );
         navAccountLiLink.setAttribute( "href", `/${ accountLink.href }` );
         navAccountLiLink.setAttribute( "title", accountLink.title );
         navAccountLiLink.innerText = accountLink.title;

         navAccountLi.appendChild( navAccountLiLink );
         navAccountBlock.appendChild( navAccountLi );
     })
         
     
     
    
    
    
    
     
     
     
     
    
    
    
     containerToFill.innerHTML = /*html */`<header class="header">
    <nav class="navContainer isHidden" id="navBar">
        <div class="btnClose" id="closerBtn">
            <div class="btnClose__firstBar"></div>
            <div class="btnClose__secondBar"></div>
        </div>
        <ul class="navContainer__ul">
            <li class="navContainer__ul__li"><a  class="btn__nav" href="/">Home</a></li>
            <li class="navContainer__ul__li"><a  class="btn__nav" href="/lesseries.html">Toute les series</a></li>
            <li class="navContainer__ul__li"><a  class="btn__nav" href="/seriedetails.html">Detail d'une série</a></li>
        </ul>
    </nav>

    <div class="header__btnBurgerBlock">
        <div class="btnBurger" id="burger">
            <div class="btnBurger__top"></div>
            <div class="btnBurger__middle"></div>
            <div class="btnBurger__bottom"></div>
        </div>
    </div>
    <h1 class="header__title"> ViDeV</h1>            
</header>
<main>
    <section id="myAccountContent">

    </section>
</main>`

}

function createNavLink() {

    let links = [
        {
            href: "/",
            title: "users",
            container:""
        }
    ]

    const navBlock = document.createElement("nav")
    const navBlockContainer = document.createElement("ul")
    const navLinkContainer = document.createElement("li")
    const navLink = document.createElement( "a" );

    navBlock.appendChild( navBlockContainer );

    links.foreach( ( link ) => {
        link.href = link.href
        navLink.appendChild( link );
        navLinkContainer.appendChild( navLink );
    })
}
