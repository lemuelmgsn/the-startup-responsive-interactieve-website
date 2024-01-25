document.querySelector('#voorbeeld-1 .carousel-scroll').addEventListener('click', scrollLeftOrRight);

function scrollLeftOrRight(uiEvent) {

    if (uiEvent.target.nodeName == 'A' && uiEvent.offsetX == 0 && uiEvent.offsetY == 0) {
     // Keyboard enter; de muis x en y positie zijn dan altijd 0.
     return;
    } else if (uiEvent.target.nodeName == 'IMG') {
     // Een click op een deel van de <img>, niet op de ::before en ::after pijltjes
     // (want die zijn onderdeel van de <a>)
     // In dat geval, ook gewoon de link volgen
     return;
    }
    var scrollWidth = this.scrollWidth;
    var offsetWidth = this.offsetWidth;
    var scrollLeft = this.scrollLeft;
    // Scroll naar links, of naar rechts, afhankelijk van waar we klikten
    var scrollXBy = (uiEvent.offsetX < offsetWidth / 2 ? -1 : 1) * offsetWidth;
    if (scrollXBy < 0 && scrollLeft == 0) {
     // Als we bij de eerste afbeelding zijn, ga dan naar de laatste
     scrollXBy = scrollWidth - offsetWidth;
    } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
     // Als we bij de laatste afbeelding zijn, ga dan naar de eerste
     scrollXBy = (-1 * scrollWidth) + scrollXBy;
    }
    this.scrollBy({
     left: scrollXBy
    });
    // Volg de <a href=""> niet als we hier zijn gekomen..
    uiEvent.preventDefault();
   
   }
