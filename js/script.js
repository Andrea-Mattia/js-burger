/** 
 * Create your burger
 * - il programma dovrà consentire di calcolare il prezzo finale
 *   selezionando o deselezionando ingredienti aggiuntivi.
 * - BONUS: rendere la checkbox spuntabile clliccando au 'add'
 */

// Refereces
var btn = document.getElementById('button');
var burgName = document.getElementById('name');
var ingredient = document.getElementsByClassName('ingredient-checkbox');
var totPrice = document.getElementById('price');
 
// Calcolo del prezzo
// aggiungo event listener per capire quando si clicca dul bottone
btn.addEventListener('click', function() {

   // rimuovo eventuali spazio nel nome del burger con trim
   var name = burgName.value.trim();
 
   // nome burger obbligatorio, se inserito valido da subito passa direttamente al calcolo prezzo
   if (name.length === 0) {
       alert('Non hai inserito un nome per il tuo burger');
   } else {
       // aggiunta costo ingredienti al prezzo base
       var price = 50;
 
       for (var i = 0; i < ingredient.length; i++) {
           var ingCheck = ingredient[i];
 
           if (ingCheck.checked) {
               // aggiornare il prezzo totale
               // uso pareInt per trasformare il value da string a number
               price += parseInt(ingCheck.value);
           }
       }
       //  stampa il prezzo e arrotondo alla seconda cifra dopo la virgola
       totPrice.innerHTML = price.toFixed(2);
   }
});
