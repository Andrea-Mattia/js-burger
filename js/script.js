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
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');

// Settings
var discount = ['123456ABCDEF', '789101GHIJKL', '111213MNOPQR']

// Add cliccabili per cambiare lo status della checkbox degli ingredienti
for (var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];
    add.addEventListener('click', function () {
        // uso this per indicare l'elemento cliccato al momento
        // uso previousElementSibling per èrendere l'elemento direttamente prima
        var thisCheckbox = this.previousElementSibling;
        // // faccio in modo che se la checkbox e checked passa ad unchecked e viceversa
        thisCheckbox.checked = ! thisCheckbox.checked;
    });
}
 
// Calcolo del prezzo
// aggiungo event listener per capire quando si clicca dul bottone
btn.addEventListener('click', function() {

    // rimuovo eventuali spazio nel nome del burger con trim
    var name = burgName.value.trim();
 
    // nome burger obbligatorio, se inserito valido da subito passa  direttamente al calcolo prezzo
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

        // Coupon (inserisco un codice sconto e verifico se è presente nel'db')
        var couponCode = coupon.value;
        if (discount.includes(couponCode)) {
            // applico il 20% di sconto
            price -= price * 0.2;
        }

       //  stampa il prezzo e arrotondo alla seconda cifra dopo la virgola
       totPrice.innerHTML = price.toFixed(2);
   }
});
