/*exercice 01
* retourner le maximum de deux nombres

function getMax(nb1, nb2) {
    return Math.max(nb1, nb2);
}
getMax();
console.log(getMax(5, 25));

function prime(limit) {
    let isPrime = true;
    for (let i = 0; i <= limit; i++) {
        for(let j = 0 ;j<=i/2; j++) {
            if (i% j === 0) {
                isPrime = false;
            }
        }


        if (isPrime) {
            console.log(i + 'est premier')
        }
    }
}

prime (17)

function prime(limit) {
    let isPrime = true;
    for (let i = 2; i <= limit/2; i++) {
        div=limit%i;
            if (div=== 0) {
                isPrime = false;
            }

        if (!isPrime) {
            console.log(limit + 'est premier')
        }
    }
}

prime (17)
* */
console.log("appele fonction")
function isPrime(limit) {
    let x = 3;
    console.log("x = ",x);

    console.log("premier = ",premier);
    // Check if n is less than 2 => not prime
    if (limit < 2) {
        console.log("il n'existe pas de nombre premier en 0 et " + limit);
    }
   else if (limit === 2) {
        console.log("2 est premier");
    }
    else {
        console.log("je suis entré dans else");
        while (x <= limit) {

            // Loop from 2 to square root of n
            for (let i = 2; i <= Math.sqrt(x); i++) {
                if (x % i === 0) {
                    premier = false;
                    console.log(x, " est pas premier");
                }
                else {
                    premier=true;
                    console.log(x, " est premier");
                }
            }
            x++;
            // If i is a divisor of n, n is not prime
        }

    }
}

function merde(nb){
    let x=3;
    if (nb<2){
        console.log("il n'existe pas de nombre premier en 0 et ",nb)
    }else if(nb===2){
        console.log("2 est premier");
    }else if(nb===3){
        console.log("2 est premier");
        console.log("3 est premier");
    }
    else{
        console.log("2 est premier");
        console.log("3 est premier");
        console.log("je rentre dans le else avec la valeur de  nb= ",nb)
        while (x<=nb){
            let premier = true;
            console.log("je rentre dans la boucle while pour la ",x," eme fois");
            for(let i=2;i<=Math.sqrt(x);i++){
                console.log("je rentre dans la boucle ***for*** avec la valeure de i=",i," ");
                if (x % i === 0) {
                    premier = false;
                    console.log(x, " n'est pas premier");
                }
                    premier=true;
                    console.log(x, " est premier");
            }

            x++;
        }
    }
}
merde(10)
