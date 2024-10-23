
function monster(name, num1, num2, num3, num4) {
    this.name = name;
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
    const statement = `${name}'s stew contains ${num1} frog toes, ${num2} newt eyes, ${num3} rabbits foots, and ${num4} drops of their special essential oil.`
    return statement;
}

function monsterGenerator() {
    document.getElementById("monster1").innerText = monster('glenda', Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10));

    document.getElementById("monster2").innerText = monster('agatha', Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10));

    document.getElementById("monster3").innerText = monster('maleficent', Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), getRandomInt(10)+1);

    
}