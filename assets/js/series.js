// Sélecteur du conteneur où insérer les données
const seriesContainer = document.getElementById( "seriesContainer" );

//Fonction de récupération et traitement 'vérification du fecth
async function fetchSeries() {
    fetch( `https://api.tvmaze.com/schedule/` )
    .then( ( response ) => {
        if ( response.status == 200 ) {
            console.info( "Statut de la requête", response.status );
            serieList = response.json();
            console.log( " serieList ", [ serieList ] )
            return serieList;
        } else {
            //console.log(" ++++++++++ ")
            console.error( "Problème : le fichier json n'existe pas ou ne peut-être atteint, car :" );
            console.info( "État de la réponse :", response );
            //console.log(" ++++++++++ ")
        }
        //console.log(" ++++++++++ ")
        return response.text();
    } )
    .then( ( series ) => {
        insertSeriesDatas( series )
        console.log("then series", series)
    } )
    .catch( function ( error ) {
        if ( error.apiTypes ) {
            console.log( error.serieList.data );
            console.log( error.serieList.status );
            console.log( error.serieList.headers );
        } else if ( error.request ) {
            console.log( error.request );
        } else {
            console.log( 'Error', error.message );
        }
        console.log( error.config );
    } );
}

// Fonction appelée dans le fetch pour traiter le résultat du fetch et insérer les données issue du fetch
function insertSeriesDatas( series ) {
    // Boucle de création d'un élément pour chaque élément du fetch
    series.forEach( serie => {
        let serieBlock = document.createElement( "article" );
        serieBlock.setAttribute( "class", "artMainContainer" );

        let titleContainer = document.createElement( "h3" );
        titleContainer.setAttribute( "class", "artMainContainer__tilte" );

        let infosContainer = document.createElement( "div" );
        infosContainer.setAttribute( "class", "artMainContainer__mainInfos" );

        let imgMedBlockContainer = document.createElement( "div" );
        imgMedBlockContainer.setAttribute( "class", "artMainContainer__mainInfos__img" );
        
        let imgOrigBlockContainer = document.createElement( "div" );
        imgOrigBlockContainer.setAttribute( "class", "artMainContainer__mainInfos__img" );

        let imgMedContainer = document.createElement( "img" );
        imgMedContainer.setAttribute( "src", serie.show.image.medium );

        let detailsContainer = document.createElement( "div" );
        detailsContainer.setAttribute( "class", "artMainContainer__mainInfos__mainDetails" );
        
        let urlContainer = document.createElement( "p" );
        let seasonContainer = document.createElement( "p" );
        let summaryContainer = document.createElement( "p" );
        let ratingContainer = document.createElement( "p" );
        let languageContainer = document.createElement( "p" );
        let scheduleContainer = document.createElement( "p" );
        let statusContainer = document.createElement( "p" );
        let typeContainer = document.createElement( "p" );

        detailsContainer.appendChild( urlContainer );
        detailsContainer.appendChild( seasonContainer );
        detailsContainer.appendChild( summaryContainer );
        detailsContainer.appendChild( ratingContainer );
        detailsContainer.appendChild( languageContainer );
        detailsContainer.appendChild( scheduleContainer );
        detailsContainer.appendChild( statusContainer );
        detailsContainer.appendChild( typeContainer );

        imgMedBlockContainer.appendChild( imgMedContainer );
        infosContainer.appendChild( imgMedBlockContainer );
        infosContainer.appendChild( detailsContainer );
        infosContainer.appendChild( detailsContainer );
        
        serieBlock.appendChild( titleContainer );
        serieBlock.appendChild( infosContainer );


        titleContainer.innerHTML = "Titre :" + serie.name;
        urlContainer.innerHTML = "<span>url :</span>" + serie.url;
        seasonContainer.innerHTML = "<span>Dernière saison :</span>" + serie.season;
        summaryContainer.innerHTML = "<span>Synopsis :</span>" + serie.show.summary;
        ratingContainer.innerHTML = "<span>Note moyenne :</span>" + serie.show.rating.average;
        languageContainer.innerHTML = "<span>Langue :</span>" + serie.show.language;
        scheduleContainer.innerHTML = "<span>Première diffusion :</span>" + serie.show.premiered;
        statusContainer.innerHTML = "<span>Statut :</span>" + serie.show.status;
        typeContainer.innerHTML = "<span>Genre :</span>" + serie.type;


        let btnSerieDetails = document.createElement( "a" );
        btnSerieDetails.setAttribute( "class", "btnShowMore" );
        //btnSerieDetails.setAttribute( "key", `${serie.show.id}` );
        btnSerieDetails.setAttribute( "target", "blank" );
        btnSerieDetails.dataset.key = serie.show.id;
        btnSerieDetails.setAttribute( "href", `/detailsserie.html` );
        btnSerieDetails.setAttribute( "alt", `${ serie.show.name }` );
        btnSerieDetails.innerHTML = "Plus de détails sur les épisodes de " + '" ' + `/${ serie.show.name }` + ' "';

        seriesContainer.appendChild( serieBlock );
        serieBlock.appendChild( btnSerieDetails );

    } );
    
    // Boucle sur les boutons "Voir plus" avec un addEventListener qui, au clic, recupère la valeur "key" et la store en local sous le nom de "pokedexID"
    
    // Ecoute des boutons voir plus pour récupérer l'id de la série au click et a terme l'envoyer dans la page detailsserie.html
    let btnShowMores = document.querySelectorAll( ".btnShowMore" );
    btnShowMores.forEach( ( btnShowMore ) => {
        //console.log( "btnShowMore", btnShowMore );
        btnShowMore.addEventListener( "click", () => {
            // vide une éventuelle valeur stockée
            // localStorage.removeItem( "serieId" );
            // défini la nouvelle valeur à stocker dans le local storage
            const storeId = btnShowMore.dataset.key;
            localStorage.setItem( "serieId", storeId );
        })
    })

}

fetchSeries();
