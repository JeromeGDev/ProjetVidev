// Sélection du conteneur principal
const showroomContainer = document.querySelector( "#showroomContainer" );
console.log( "showroomContainer", showroomContainer );


/* ========== Slider : Mise en place ========== */
// Mise en place des éléments du slider
// Conteneur extérieur du slider - masque d"écrêtage
let sliderBlockMask = document.createElement( "div" );
sliderBlockMask.setAttribute( "class", "sliderBlockMask" );


// Conteneur interne du slider - contient toutes les fiches des séries qui seront créées plus bas dans le foreEach
let sliderBlock = document.createElement( "div" );
sliderBlock.setAttribute( "class", "sliderBlockMask__sliderBlock" );

// Imbrication des conteneurs les uns dans les autres
sliderBlockMask.appendChild(sliderBlock) // masque interne du slider dans le conteneur externe
showroomContainer.appendChild(sliderBlockMask) // masque externe du slider dans le conteneur global da la page = section #showroomContainer

// Création du bouton droit du slider
let rightArrow = document.createElement( "div" );
rightArrow.setAttribute( "class", "rightTransBtn" );
rightArrow.setAttribute("id","toRight");

let rightArrow1 = document.createElement( "div" );
rightArrow1.setAttribute( "class", "rightTransBtn__btnR1" );

let rightArrow2 = document.createElement( "div" );
rightArrow2.setAttribute("class","rightTransBtn__btnR2");

rightArrow.appendChild( rightArrow1 ); // imbrication dans éléments dans leur conteneur parent pour donner naissance au bouton
rightArrow.appendChild( rightArrow2 ); // imbrication dans éléments dans leur conteneur parent pour donner naissance au bouton

showroomContainer.appendChild( rightArrow ); // imbrication dans éléments dans leur conteneur parent => bouton dans conteneur globale (section)


// Création du bouton gauche du slider
let leftArrow = document.createElement( "div" );
leftArrow.setAttribute( "class", "leftTransBtn" );
leftArrow.setAttribute("id","toLeft");

let leftArrow1 = document.createElement( "div" );
leftArrow1.setAttribute( "class", "leftTransBtn__btnL1" );
leftArrow1.innerText = '-';

let leftArrow2 = document.createElement( "div" );
leftArrow2.setAttribute("class","leftTransBtn__btnL2");
leftArrow2.innerText = '-';

leftArrow.appendChild( leftArrow1 ); // imbrication dans éléments dans leur conteneur parent pour donner naissance au bouton
leftArrow.appendChild( leftArrow2 ); // imbrication dans éléments dans leur conteneur parent pour donner naissance au bouton

showroomContainer.appendChild( leftArrow ); // imbrication dans éléments dans leur conteneur parent => bouton dans conteneur globale (section)

/* ========== Contenu de la page : Mise en place ========== */
// Mise place du contenu du fetch dans la page :
// Numero de la page appelée dans le fetch fetchShowroom - a rendre dynamique par la création d'une pagination
const page = 1;

const fetchShowroom = fetch( `https://api.tvmaze.com/shows?page=${page}` )
.then((response) => {
    if (response.status == 200) {
    console.log("le fichier .json contenant la liste des série à importer existe bien");
    console.log("et ci-dessous, résultat de l'appel du fichier json :");
    console.info("Statut de la requête", response.status);
    serieList = response.json();
    console.log(" serieList ",[serieList])
    return serieList;
    } else {
    //console.log(" ++++++++++ ")
    console.error("Problème : le fichier json n'existe pas ou ne peut-être atteint, car :");
    console.info("État de la réponse :", response);
    //console.log(" ++++++++++ ")
    }
    //console.log(" ++++++++++ ")
    return response.text();
})
.then((series) => {
    serieShowroom(series)
    console.info("'series' du 'fetch' à passer en paramètre à la fonction 'insertSeriesDatas'", series)
})
.catch(function (error) {
    if (error.serieList) {
        console.log(error.serieList.data);
        console.log(error.serieList.status);
        console.log(error.serieList.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
} );


// Création de la fonction qui va créer chaque fiche série en fonction des données reçues dans le fetch
function serieShowroom( series ){
    //console.log( "series", series ) // Console de débuguage
    
    // Création des div conteneurs de chaque fiche serie
    series.forEach( serie => {
        
        // Création de la div conteneur principal de la fiche série
        let serieBlock = document.createElement( "article" );
        serieBlock.setAttribute( "class", "#showroomContainer__sliderBlockMask__sliderBlock__slide artMainContainer toSlide" );
        serieBlock.setAttribute( "id", serie.id );// ajout de l'id pour l'utilisation dans le slide

        // Création de la div conteneur des informations textuelles
        let infosContainer = document.createElement( "div" );
        infosContainer.setAttribute( "class", "artMainContainer__mainInfos" );

        // Création des titres
        let titleContainer = document.createElement( "h3" );
        titleContainer.setAttribute( "class", "artMainContainer__tilte" );

        // Création de la div conteneur de l'image
        let imgMedBlockContainer = document.createElement( "div" );
        imgMedBlockContainer.setAttribute( "class", "artMainContainer__mainInfos__img" );
        // Création des images
        let imgMedContainer = document.createElement( "img" );
        imgMedContainer.setAttribute( "src", serie.image.medium );
        
        // Création de la div conteneur des détails textuels
        let detailsContainer = document.createElement( "div" );
        detailsContainer.setAttribute( "class", "artMainContainer__mainInfos__mainDetails" );
        
        // Création des conteneurs de texte des détails
        let seasonContainer = document.createElement( "p" );
        let averageRuntimeContainer = document.createElement( "p" );
        //let ratingContainer = document.createElement( "p" );
        let languageContainer = document.createElement( "p" );
        let typeContainer = document.createElement( "p" );
        let genreContainer = document.createElement( "p" );

        // imbrication des conteneurs dans leurs parents respectifs
        detailsContainer.appendChild( seasonContainer );
        detailsContainer.appendChild( averageRuntimeContainer );
        //detailsContainer.appendChild( ratingContainer );
        detailsContainer.appendChild( languageContainer );
        detailsContainer.appendChild( typeContainer );
        detailsContainer.appendChild( genreContainer );

        imgMedBlockContainer.appendChild( imgMedContainer );
        infosContainer.appendChild( imgMedBlockContainer );
        infosContainer.appendChild( detailsContainer );
        infosContainer.appendChild( detailsContainer );
        
        serieBlock.appendChild( titleContainer );
        serieBlock.appendChild( infosContainer );

        // CREATION DES CONTENUS TEXTE A INSÉRER DANS LEURS CONTENEURS
        // particularité : si la saison n'est pas terminée de diffusée, la date est indéterminée => affichage d'un texte ou de la date de fin
        titleContainer.innerHTML = "Titre :" + serie.name;
        if ( serie.ended == null || undefined ) {
            seasonContainer.innerHTML = "<span>Dernière saison :</span>" + "Indéterminé";
        } else {
            seasonContainer.innerHTML = "<span>Dernière saison :</span>" + serie.ended;
        }
        
        averageRuntimeContainer.innerHTML = "<span>Durée moyenne :</span>" + serie.averageRuntime;
        languageContainer.innerHTML = "<span>Langue :</span>" + serie.language; 
        typeContainer.innerHTML = "<span>Genre :</span>" + serie.type;
        // summaryContainer.innerHTML = "<span>Synopsis :</span>" + serie.show.summary; // finalement abandonné mais dispo
        // ratingContainer.innerHTML = "<span>Note moyenne :</span>" + serie.rating.average; // finalement abandonné mais dispo
        // scheduleContainer.innerHTML = "<span>Première diffusion :</span>" + serie.show.premiered; // finalement abandonné mais dispo
        // statusContainer.innerHTML = "<span>Statut :</span>" + serie.show.status; // finalement abandonné mais dispo
        

        // Création du bouton d'ouverture des détails pour chaque série
        let btnSerieDetails = document.createElement( "a" );
        btnSerieDetails.setAttribute( "class", "btnShowMore" );
        //btnSerieDetails.setAttribute( "key", `${serie.show.id}` ); // finalement abandonné mais dispo
        //btnSerieDetails.setAttribute( "target", "blank" ); // finalement abandonné mais dispo
        btnSerieDetails.dataset.key = serie.id;
        btnSerieDetails.setAttribute( "href", `/detailsserie.html` );
        btnSerieDetails.setAttribute( "alt", `${ serie.name }` );
        btnSerieDetails.innerHTML = "Plus de détails sur les épisodes de " + '" ' + `/${ serie.name }` + ' "';

        sliderBlock.appendChild( serieBlock );
        serieBlock.appendChild( btnSerieDetails );

    } );
    
    // Ecoute des boutons voir plus pour récupérer l'id de la série au click et a terme l'envoyer dans la page "detailsserie.html"
    let btnShowMores = document.querySelectorAll( ".btnShowMore" );
    const toSlide = document.querySelectorAll( ".toSlide" );
    // Boucle sur les boutons "Voir plus" avec un addEventListener qui, au clic, récupère la valeur "key" et la store en local sous le nom de "serieId"
    btnShowMores.forEach( ( btnShowMore ) => {
        btnShowMore.addEventListener( "click", () => {
            // défini la nouvelle valeur à stocker dans le local storage
            const storeId = btnShowMore.dataset.key;
            localStorage.setItem( "serieId", storeId );
        })
    } )
    

}
console.log( "showroomContainer", showroomContainer )




/* ========== Slider : Fonctionnement ========== */
// Sélection du conteneur à déplacer

console.log( "toSlide", toSlide )

const toLeftMover = document.querySelector( "#toLeft" );
const toRightMover = document.querySelector( "#toRight" );

toLeftMover.addEventListener( "click", scrollLeft );
toRightMover.addEventListener( "click", scrollRight);

const getTarget = () => {
    toSlide.foreach( ( slide ) => {
        console.log("valeur id", slide.id)
    })
}
getTargetPlus();
function scrollLeft() {
    toSlide.scrollTo( -200, 0 );
}
function scrollRight() {
    toSlide.scrollTo( 200, 0 );
}
// CRÉATION DE LA PAGINATION
// 1 - création du conteneur des boutons de pagination
//const btnChangePageContainer = document.CreateElement ("div");
// 2 - création d'un  bouton de pagination
// const btnChangePage = document.CreateElement ("a");
// btnChangePage.setAttribute ("href", `${page1}`+1;
// btnChangePage.setAttribute ("class", ""pageBtn;
