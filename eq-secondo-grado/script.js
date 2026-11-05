// prendiamo un riferimento 
const btn = document.getElementById("btn-calcola");

// prendiamo un riferimento agli input testuali 
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");




/* btn.addEventListener("click", function () { // funzione anonima


}); */

/* btn.addEventListener("click", () => { // funzione anonima (arrow function)


})
 */
function calcolaSoluzioni(){
    console.log("a=", aInput.value);
    console.log("b=", bInput.value);
    console.log("c=", cInput.value);

    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    let delta = (b * b) - (4 * a * c);

    if (delta > 0) {
        let primoRisultato = (-b + Math.sqrt(delta)) / (2 * a);
        let secondoRisultato = (-b - Math.sqrt(delta)) / (2 * a);
    
        console.log("x1 = " + primoRisultato + ", x2 = " + secondoRisultato);
    } 
    else if (delta < 0) {
        console.log("Nessuna soluzione reale");
    } 
    else if (delta == 0) {
        let unicoRisultato = -b / (2 * a);
        
        console.log("x1 = x2 = " + unicoRisultato);
    }

}   

btn.addEventListener("click",calcolaSoluzioni);
