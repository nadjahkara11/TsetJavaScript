/*exercice 1
Écrivez une fonction qui renvoie le maximum de deux nombres.
 */
function getMax(nb1, nb2) {
    return Math.max(nb1, nb2);
}

getMax();
console.log(getMax(5, 25));

/* Exercice 2 :
 Écrivez une fonction appelée fozz_bezz qui prend un nombre
○ Si le nombre est divisible par 3, il doit renvoyer «Fozz»
○ S'il est divisible par 5, il doit renvoyer «Bezz».
○ S'il est divisible par 3 et 5, il doit renvoyer «FozzBezz».
○ Sinon, il doit renvoyer le meme numéro .
 */
function fozz_bezz(nb) {
    if ((nb % 5 === 0) && (nb % 3 === 0)) {
        console.log("FozzBezz");
    } else if (nb % 5 === 0) {
        console.log("Bezz");
    } else if (nb % 3 === 0) {
        console.log("Fozz");
    } else console.log(nb);
}

fozz_bezz(8);

/* exercice 3 :
 Ecrivez une fonction pour vérifier la vitesse des conducteurs. Cette fonction doit avoir un paramètre: la vitesse.
○ Si la vitesse est inférieure à 80, il doit afficher «Ok».
○ Sinon, pour tous les 4 km / h au-dessus de la limite de vitesse (80),
 il devrait donner au conducteur un point d'inaptitude et imprimer le nombre total de points d'inaptitude.
  Par exemple, si la vitesse est de 90, il doit imprimer: «Points: 2».
  ○ Si le conducteur obtient plus de 12 points, la fonction doit imprimer: «Licence suspendue»
 */


function check(speed) {

    let y = speed - 80;
    let point = y / 4;

    if (speed <= 80) {
        console.log('ok')
    } else if ((speed > 80) && (point <= 12)) {

        console.log(point)
    } else {
        console.log('licence suspended')
    }

}

check(120)

/* exercice 4:
4. Écrivez une fonction appelée showNumbers qui prend un paramètre appelé limit. Il doit imprimer tous les nombres entre 0 et limite avec une étiquette pour identifier les nombres pairs et impairs. Par exemple, si la limite est de 3, il doit imprimer:
○ 0 PAIR
○ 1 ODD
○ 2 PAIR
○ 3 ODD
*/
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {

        if (!(i % 2)) {
            console.log(i, 'EVEN')
        } else if ((i % 2)) {
            console.log(i, 'ODD')
        }
    }
}

showNumbers(5);


/*
 exercice 5 :
 5. Écrivez une fonction qui renvoie la somme des multiples de 3 et 5 entre
0 et limit (paramètre). Par exemple, si la limite est de 20, elle doit renvoyer la somme de 3, 5, 6, 9, 10, 12, 15, 18, 20
*/
function somme(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (!(i % 3) || !(i % 5)) {
            sum = sum + i;
        }
    }
    return sum;
}

somme();
console.log(somme(9));

/*exercice 6:
6. Ecrivez une fonction appelée show_stars (lignes). Si les lignes sont 5, il doit imprimer ce qui suit:
○ *
○ **
○ ***
○ ****
○ *****
*/
function show_stars(rows) {
    let str = '';
    for (let i = 1; i <= rows; i++) {
        str = str + '*';
        console.log(str)
    }
    console.log('\n')
}

show_stars(6)

/*
 Exercice 7:
 7. Écrivez une fonction qui imprime tous les nombres premiers entre 0 et limit
où limit est un paramètre.*/

//fonction qui renvoie true si un nombre est premier
function isPrime(limit) {

    if (limit < 2) return false;
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if ((limit % i === 0)) return false;
    }
    return true;
}

//Fonction qui renvoie touts les nombres premier entre 0 et limite
function premier(limit) {

    for (let i = 0; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

premier(15)