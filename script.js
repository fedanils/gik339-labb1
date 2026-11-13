// Uppgift 2


// console.log(music);
// console.log(previousSong);
// console.log(nextSong);
console.log(songPlaying);

//Skapat variabler av const, let och var inuti ett block och skrivit ut dem med console.log
{
    const music = "Bambambam bamBaDAM bamBaDAM.";
    let previousSong = "Ochrasy - Mando Diao";
    let nextSong = "Handbags and Gladrags - Stereophonics";
    var songPlaying = "Holly Holy - Neil Diamond";
    console.log(music);
    console.log(previousSong);
    console.log(nextSong);
    console.log(songPlaying);
}


// console.log(music);
// console.log(previousSong);
// console.log(nextSong);
console.log(songPlaying);



/* 
1.)
Den enda varibalen som nås utanför sitt block är songPlaying med datatypen var.
songPlayings utskrift ger också värdet som gavs i blocket. 
Datatypen var ger alltså räckvidd enligt globalt kontext. 
De andra variablernas scope och räckvidd är inom blocket, så de nås bara där. 
Hade de dock skapats utanför blocket hade de även nåtts inuti blocket. 
2.)
Försökte skriva ut variablerna med console.log() utanför och innan blocket. 
Har kommenterat ut de som ger fel i konsolen.
Den enda som inte ger fel är den med datatypen var som hete songPlaying.
Den ger undefined i konsolen vilket betyder att variablen eller dennes värde inte finns. 
Variablerna skapade i blocket nås alltså inte härifrån. 
Inuti blocket, alltså där de är skapade, så kam man skriva ut alla variabler och se deras värde.
Utanför och efter blocket gav också fel för let och const-variablerna vilka är utkommenterade. 
Efter blocket fick var-variablen värdet från blocket för att dess scope kan nå värdet i blocket. 

*/


// Uppgift 3

//En arrow-funktion som tar emot parametrar(num1 och num2) och retunerar summan av dem. 
// const add = (num1, num2) => num1 + num2;
// console.log(add(23,66));

/* 
1.) 
Const rekommenderas att användas om inte värdet på variabeln ska ändras.

Annars kanske man exempelvis ändrar till:
add = (num1, num2) => num1 - num2;

Vilket istället blir en subtraktion och tvärtom mot vad som först var tänkt och namnet indikerar. 
Sen är det nog bra idé att bara deklarera funktioner på ett ställe i koden så man inte behöver leta efter "senaste". versionen. 
Funktioner rekommenderas också på grund av säkerhetskäl att skrivas med const, 
annars kan de ändras av någon utifrån eller "stängas av" i browsers pga säkerhetsrisk.

2.)
Så här hade jag skrivit om jag istället gjort en funktionsdeklaration: 

function add(num1, num2){
    return num1 + num2;
    };

3.) 
Funktion returnerar något när den ger något tillbaka, 
när något utförs i funktionen så kan vi retuneras resultatet.
Det kan vara true, false eller något konkret beroende på hur funktionen ser ut.
I add-funktionen adderas två tal och då returneras summan av dem. 

*/

//Uppgift 4 

const add = (num1, num2) => {
// console.log(num1 == 0);
// console.log(num2 === '0');
// console.log(num2 === 0);
// console.log(num1 == NaN);

console.log( num1 ? "truthy" : "falsy" ); 

if (typeof num1 === "number" && typeof num2 === "number" && num1 !== undefined && num1 !== null && num2 !== undefined && num2 !== null) {
    console.log("num1 = " + num1);
    console.log("num2 = " + num2);
    console.log("Success!");
    console.log(num1 + num2);
} else {
    console.log("num1 = " + num1);
    console.log("num2 = " + num2);
    console.log("Doesn't work! You can only add numbers");
};
};

/* 
    1.) 
    Ternary operator är en annan variant av if-sats kan man säga, om ett villkor (det som står innan frågetecknet) 
    blir "truthy" ( sant-ish, beter sig som true i if-satser men är inte samma sak) returneras det som står efter frågetecknet. 
    Om villkoret istället blir "falsy" (false-ish, beter sig som false i if-satser) händer det som står efter kolon-tecknet.
    Så det som kommer efter kolon-tecknet blir som en else, det händer om inte villkoret stämmer. 
    2.) 
     === gör en strict jämförelse, det är inte bara värdet som jämförs utan också datatypen.  
     Om två lika värden har olika datatyper så blir jämförelsen false. 
     Vid == så görs en implicit typkonvertering för att det som jämförs ska ha samma datatyp. 
     Detta kan ge oväntade resultat vilket är varför jämföresle med === brukar rekommenderas. 
    3.) 
    Eftersom det verkade som att allt skulle ligga i ett if-villkor
    aå har jag gjort att alla villkoren i if-satsen behöver vara true för att gå vidare. 
    Annars går det in i else och det kommer ett felmeddelande. 
   
*/

// Uppgift 5

const num1 = 0;
let arg1;
let sum = false;

add(sum, 1);
add("0", 3);
add(3, "num1");
add(-5, num1);
add(arg1, 7);
add(); 
add(66,33);
add(44,42);
add(42,66);

console.log(num1);
console.log(sum);

/* 
1.) 
Variabeler är ett sätt att spara information. Variabler har en datatyp och namn. 
Parameter skapas i funktionen då man talar om vad som behövs. Exempelvis i add-funktionen behövs num1 och num2 för att utföra den. 
Argument är det som förs in i parantesen när en metod anropas. Så argumenten kan ge värden till parametrar i funktioner. 
2.) 
Den ger const num1-variabelns värde. num1 är en const och dess värde ändras inte.
num1 från funktionen sparas inte och används bara där.
3. ) 
add(-5, num1); 
Första jämförelsen (tenär operator) kollar om num1 blir truthy/falsy. 
Sen kollas om num1-värdet som fåtts av argumentet är ett number (-5) vilket är true- Det stämmer och nästa villkor jämförs. 
Nu kollas om num2 är ett number. num2 är variabeln const num1 vilket har värdet 0. Det är också ett number och vi går till nästa villkor. 
Då kollas att num1 inte är undefined, alltså att värdet inte saknas, eftersom vi har ett värde går vi vidare.
Efter det kollas att num1 inte är null, vilket inte är 0 utan tomt. Eftersom num1 har ett värde går vi vidare.
Sem så kollas att num2 inte är undefined, vilket stämmer och efter det jämförs om num2 inte är null. 
num2 är 0 men inte null så vi går vidare.
Alla dessa har && mellan sig vilket betyder att alla villkor måste vara true för att gå in i if-blocket. 
Om det blivit stopp någonstans på vägen hoppar det istället till else-blocket. 
Där skrivs num1 och num2 ut för tydlighet och ett felmeddelande skrivs ut. 
Men det blev inte stopp den här gången så då hamnar vi i if-blocket.
Har skrivit in variablerna i console.log() för att det ska bli tydligare vad som händer i konsolen. 
När det kommer in i if-satsen kommer också ett "Success!"-meddelande. 
Uträkningen kunde göras (-5 -0) och svaret skrivs ut med console.log(). Här bliv svaret -5.

add(sum, 1);
Ger falsy eftersom num1 = false. 
num2 = 1. Den hamnar i else och får felmeddelande
efteersom den inte uppfyller inte if-villkoren.

add("0", 3);
Ger truthy eftersom num1 klarar den första jämförelsen.
Men eftersom det är en sträng klarar den inte if-villkoren och hamnar i else.
num1 = "0" och num2 = 3.

add(3, "num1");
Ger truthy eftersom num1 klarar den första jämförelsen.
Men eftersom num2 är en sträng klarar den inte if-villkoren och hamnar i else.
num1 = 3 och num2 = "num2".

add(arg1, 7);
Ger falsy eftersom num1 inte uppfyller villkoren för första jämförelsen.
arg1 saknar värdet, alltså får num1 värdet undefined.
num2 = 7. Den klarar inte if-villkoren och hamnar i else.

add(); 
Ger falsy eftersom den inte uppfyller villkoret. 
Både num1 och num2 är undefined eftersom funktionen inte harargument för dem.
Den hamnar därför i else. 

add(66,33);
Ger truthy eftersom num1 uppfyller villkoren.
Den hamnar i if-blocket och summan blir 99.
num1 = 66 och num2 = 33.

add(44,42);
Ger truthy eftersom num1 klarar villkoren. 
Den klarar också if-villkoren och summan blir 86.
num1 = 44 och num2 = 42.

add(42,66);
Ger truthy eftersom den uppfyller villkoret i jämförelsen.
Den klarar också villkoren i if och ger summan 100.
num1 = 42 och num2 = 66.

*/

