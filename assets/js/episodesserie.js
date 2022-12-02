

//Récupération de la valeur stockée dans le local storage
let storeId = localStorage.getItem( "serieId" );

//const serieTotDetailUrl = document.location.href.split( urlFirstPart = `/` );
//const serieId = serieTotDetailUrl[ 1 ];

//const storeId = 2759;
//const serieId = 27814;
async function serieDetailFetch() {

    let response = await fetch( `https://api.tvmaze.com/shows/` + storeId );

    if ( response.ok === true ) {

        let responseJson = await response.json();

        console.log( "responseJson.name", responseJson.name );
        console.log( "responseJson.name", responseJson.name );
        console.log( "responseJson.averageRuntime", responseJson.averageRuntime );
        console.log( "responseJson.externals", responseJson.externals );
        console.log( "responseJson.genres", responseJson.genres );
        console.log( "responseJson.id", responseJson.id );
        console.log( "responseJson.image", responseJson.image );
        console.log( "responseJson.language", responseJson.language );
        console.log( "responseJson.officialSite", responseJson.officialSite );
        console.log( "responseJson.premiered", responseJson.premiered );
        console.log( "responseJson.rating", responseJson.rating );
        console.log( "responseJson.status", responseJson.status );
        console.log( "responseJson.summary", responseJson.summary );
        console.log( "responseJson.type", responseJson.type );
        console.log( "responseJson.updated", responseJson.updated );
        console.log( "responseJson.url", responseJson.url );
        console.log( "responseJson.webChannel", responseJson.webChannel );
        console.log( "responseJson.weight", responseJson.weight );
        console.log( "responseJson._links", responseJson._links );



        return responseJson;
    }
    //alert( "Connexion à la base API impossible" );
}


function createMainContainer( responseJson ) {

    // récupération du conteneur html existant (section detailsEpisode)
    const epDetailsContainer = document.getElementById( "detailsEpisode" );
    
    // Création d'un conteneur global "article" de tous les éléments que nous allons ajouter
    let fullContainer = document.createElement( "article" )
    fullContainer.setAttribute( "id", "serieContainer") // affection de l'id serieContainer
    
    epDetailsContainer.appendChild( fullContainer ); // Insertion du conteneur globale dans la section retenue

    
    /* ===================================================== BLOCK D'ENTÊTE ========================== */
    /* ================================================================================================ */

    // Création d'une div qui servira d'entete pour l'article traitant de la série
    let headerSectionContainer = document.createElement( "div" );
    headerSectionContainer.setAttribute( "class", "top" ); // affection de la classe top
    headerSectionContainer.setAttribute( "id", "headerSerie" ); // affection de l' ID headerSerie
    console.log( "headerSectionContainer", headerSectionContainer );

    fullContainer.appendChild( headerSectionContainer ); // Insertion du header dans l'article créé


    // Contenu du header de l'article
    const siteTitle = document.createElement( "h2" ); // création d'un h2
    siteTitle.setAttribute( "class", "header__title" ); // affectation de class
    siteTitle.setAttribute( "id", "siteTitle" ); // affectation d'ID'
    siteTitle.textContent = responseJson.name; // ajout du texte de contenu en provenance du fetch
    
    headerSectionContainer.appendChild( siteTitle ); // insertion du text dans son conteneur

    


    /* ================================================================================================ */
    // CRÉATION DYNAMIQUE DE LA PREMIERE SECTION
    
    // Variables de Récupération des conteneurs existants qui seront insérées dans la page

    // Création du conteneur du contenu principal
    let mainContainer = document.createElement("div") // en tant que div
    mainContainer.setAttribute( "class", "mainS" ); // avec la class mainS
    //console.log( "mainGenContainer", mainContainer );


    fullContainer.appendChild( mainContainer ); // insertion du conteneur de contenus principal dans le conteneur global à la suite du header

    //Article
    const articleContainer = document.createElement( "div" );
    articleContainer.setAttribute( "class", "mainS__mainsA" );
    articleContainer.setAttribute( "id", "articleContainer" );
    //console.log("articleContainer",articleContainer);
    mainContainer.appendChild( articleContainer );


    /* ================================= BLOCK PRINCIPAL CORPS DE PAGE ================================ */
    //Block principal Info
    const infosContainer = document.createElement( "div" );
    infosContainer.setAttribute( "class", "mainS__mainsA__InfosBlock" );
    infosContainer.setAttribute( "id", "infosContainer" );
    //console.log( "infosContainer", infosContainer );
    articleContainer.appendChild( infosContainer );


    //Block principal de l'image
    const posterContainer = document.createElement( "div" );
    posterContainer.setAttribute( "class", "mainS__mainsA__InfosBlock__poster" );
    posterContainer.setAttribute( "id", "posterContainer" );
    //console.log( "posterContainer", posterContainer );
    infosContainer.appendChild( posterContainer );


    //image
    const posterImg = document.createElement( "img" );
    posterImg.setAttribute( "class", "mainS__mainsA__InfosBlock__poster__img" );
    posterImg.setAttribute( "id", "posterImg" );
    posterImg.setAttribute( "src", responseJson.image.medium );
    posterImg.setAttribute( "alt", "Poster de la série The Last serieDetail" );
    //console.log( "posterImg", posterImg );
    posterContainer.appendChild( posterImg );


    //Block d'informations générales    
    const infoContentBlock = document.createElement( "div" );
    infoContentBlock.setAttribute( "class", "mainS__mainsA__InfosBlock__summary" );
    infoContentBlock.setAttribute( "id", "infoContentBlock" );
    //console.log( "infoContentBlock", infoContentBlock );
    infosContainer.appendChild( infoContentBlock );


    //Titre h3
    const h3Container = document.createElement( "h3" );
    let h3Content = document.createTextNode( responseJson.name );
    //console.log( "h2Container", h2Container );
    h3Container.appendChild( h3Content );
    infoContentBlock.appendChild( h3Container );


    //Texte de résumé
    const summaryContainer = document.createElement( "p" );
    let summaryContent = document.createTextNode( responseJson.summary );
    //console.log( "summaryContent", summaryContent );
    summaryContainer.appendChild( summaryContent, responseJson.summary);
    infoContentBlock.appendChild( summaryContainer );

/* ========================================== SIDEBAR DE PAGE ========================================= */

    // Bloc sideBar
    const asideContainer = document.createElement( "aside" );
    asideContainer.setAttribute( "class", "mainS__mainsA__asideInfo" );
    asideContainer.setAttribute( "id", "asideContainer" );
    //console.log( "asideContainer", asideContainer );
    articleContainer.appendChild( asideContainer );


    //Block de contenu englobant dans la sidebar
    const sidebarContainer = document.createElement( "div" );
    sidebarContainer.setAttribute( "class", "mainS__mainsA__asideInfo__sidebar" );
    sidebarContainer.setAttribute( "id", "sidebarContainer" );
    //console.log( "sidebarContainer", sidebarContainer );
    asideContainer.appendChild( sidebarContainer );


    //h3 du bloc de Sidebar
    const asideH3 = document.createElement( "h3" );
    asideH3.setAttribute( "class", "mainS__mainsA__asideInfo__sidebar__asideH3" );
    asideH3.setAttribute( "id", "asideH3" );
    //console.log( "asideH3", asideH3 );
    asideH3.innerHTML = "Informations générales";
    sidebarContainer.appendChild( asideH3 );


    //Block de Span dans la sidebar
    //Conteneur de la liste de spans : ul
    const asideSpans = document.createElement( "ul" );
    asideSpans.setAttribute( "class", "asideSpans" );
    asideSpans.setAttribute( "id", "asideSpansContainer" );
    //console.log( "asideSpans", asideSpans );
    sidebarContainer.appendChild( asideSpans );

    /* ========================================== CREATION DE TOUS LES li DE LA SIDEBAR ========================================= */
    // l'appendChild des li dans le ul se trouve à la fin du processus de création des li ci-dessous

  
    //Span averageRuntime - Durée
    const liAverageRuntimeContainer = document.createElement( "li" );
    liAverageRuntimeContainer.setAttribute( "id", "liAverageRuntime" );
    liAverageRuntimeContainer.innerHTML = `<span class='asideSpans__spanTitle'>Durée : </span><span class='asideSpans__spanText'>${responseJson.averageRuntime} minutes</span>`
    asideSpans.append( liAverageRuntimeContainer);
    //console.log( spanAverRtimeTitleContainer, spanAverRtimeTextContainer );

    /* ========================================== */
    //Span averageRuntime - Statut
    const liStatus = document.createElement( "li" );
    liStatus.setAttribute( "id", "listatus" );
    liStatus.innerHTML = `<span class='asideSpans__spanTitle'>Statut : </span><span class='asideSpans__spanText'> ${responseJson.status} </span>`
    asideSpans.append( liStatus );

    /* ========================================== */
    
    //Span genres - Genres / type de série
    const liGenres = document.createElement( "li" );
    liGenres.setAttribute( "id", "liGenres" );
    liGenres.innerHTML = `<span class='asideSpans__spanTitle'>Genres :</span><span class='asideSpans__spanText'> ${ responseJson.genres }</span>`;
    asideSpans.append( liGenres );

    /* ========================================== */
    //Span averageRuntime - Première diffusion
    const liPremiered = document.createElement( "li" );
    liPremiered.setAttribute( "id", "liPremiered" ); 
    liPremiered.innerHTML = `<span class='asideSpans__spanTitle'>Première diffusion :</span><span class='asideSpans__spanText'> ${responseJson.premiered}</span>`
    asideSpans.append( liPremiered );
    //console.log( "liPremiered", liPremiered );


     /* ========================================== */
    //Span averageRuntime - Chaîne Web
    const liWebChannelName = document.createElement( "li" );
    liWebChannelName.setAttribute( "id", "liWebChannelName" );
    liWebChannelName.innerHTML = `<span class='asideSpans__spanTitle'>Diffusé sur : </span><span class='asideSpans__spanText'>${responseJson.webChannel.name}</span>`
    asideSpans.append( liWebChannelName );

    /* ========================================== */
    //Span averageRuntime - Site officiel de la chaîne Web   

    const officielLink = document.createElement( "a" );
    officielLink.setAttribute( "href", responseJson.officialSite );
    officielLink.setAttribute( "target", "_bnk" );
    officielLink.append(responseJson.officialSite );
    
    //Création d'une balise li qui contiendra la span liChannelSite
    const liChannelSite = document.createElement( "li" );
    liChannelSite.setAttribute( "id", "liWebChannelLink" );
    liChannelSite.innerHTML = `<span class='asideSpans__spanTitle'>Site Officiel : </span><span class='asideSpans__spanText'>${responseJson.officialSite}</span>`
    asideSpans.append( liChannelSite );    
    
    /* ========================================== */
    //insertion de tous les  li dans le ul
    asideSpans.appendChild( liAverageRuntimeContainer );
    asideSpans.appendChild( liStatus );
    asideSpans.appendChild( liGenres );
    asideSpans.appendChild( liPremiered );
    asideSpans.appendChild( liWebChannelName );
    asideSpans.appendChild( liChannelSite );
    // ESSAI TOUS LES APPENCHILD EN UNE FOIS : asideSpans.appendChild( liAverageRuntime, liStatus, liGenres, liPremiered, liWebChannelName, spanWebChannelSitecontent );
       
    ////Systeme de vote
    // Conteneur de vote
    const voteBlockContainer = document.createElement( "div" );
    voteBlockContainer.setAttribute( "class", "mainS__mainsA__asideInfo__votesContainer" );
    voteBlockContainer.setAttribute( "id", "voteBlockContainer" );
    //console.log( "voteBlock", voteBlock );
    sidebarContainer.appendChild( voteBlock );

    const voteBlockInner = document.createElement( "div" );
    voteBlock.setAttribute( "class", "mainS__mainsA__asideInfo__votesInner" );
    voteBlock.setAttribute( "id", "voteBlockInner" );
    voteBlock.innerHTML = responseJson.rating;
    //console.log( "voteBlock", voteBlock );
    sidebarContainer.appendChild( voteBlock );
    
    
    // Votes réalisés
    const voted = document.createElement( "div" );
    voteBlock.setAttribute( "id", "votedBar" );
    voteBlock.setAttribute( "class", "voted" );
    voteBlock.appendChild( voted );
    

    // Vote masque de surface
    const toVote1 = document.createElement( "i" );
    toVote.setAttribute( "id", "vote-1" );
    //toVote.setAttribute( "class", "toVote" );
    toVote.setAttribute( "class", "fa-solid fa-star toVote" );

    const toVote2 = document.createElement( "i" );
    toVote.setAttribute( "id", "vote-2" );
    toVote.setAttribute( "class", "fa-solid fa-star toVote" );

    const toVote3 = document.createElement( "i" );
    toVote.setAttribute( "id", "vote-3" );
    toVote.setAttribute( "class", "fa-solid fa-star toVote" );

    const toVote4 = document.createElement( "i" );
    toVote.setAttribute( "id", "vote-4" );
    toVote.setAttribute( "class", "fa-solid fa-star toVote" );

    const toVote5 = document.createElement( "i" );
    toVote.setAttribute( "id", "vote-5" );
    toVote.setAttribute( "class", "fa-solid fa-star toVote" );


    //console.log( "toVote", toVote );
    voteBlock.appendChild( toVote1 );
    voteBlock.appendChild( toVote2 );
    voteBlock.appendChild( toVote3 );
    voteBlock.appendChild( toVote4 );
    voteBlock.appendChild( toVote5 );

    // vidage du local storage à la fermeture de la fenêtre
    // $(window).unload(function(){
    //     localStorage.removeItem( "serieId");
    //   });    
}
serieDetailFetch().then( responseJson => createMainContainer( responseJson ) );

