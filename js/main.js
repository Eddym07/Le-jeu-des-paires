

const cards = document.getElementsByClassName("card"); /* Je récupère ma carte de class "card"*/

for (let index = 0; index < cards.length; index++) {
    let card = cards[index];
    card.addEventListener('click', function() {       /*Je fais une fonction de changement de couleur*/
        
        this.style.backgroundColor = "red"; 

      
          
       
     });
}




