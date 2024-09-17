//5. Piedra, papel o tijera.
function jugar(jugador1, jugador2){
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();

    if(jugador1 != "piedra" && jugador1 != "papel" && jugador1 != "tijera"){
        return "Jugador 1 ingresó una opción no válida."
    } else if(jugador2 != "piedra" && jugador2 != "papel" && jugador2 != "tijera"){
        return "Jugador 2 ingresó una opción no válida."
    }

    if(jugador1 == jugador2){
        return "¡Es un empate!";
    } else if (jugador1 == "tijera" && jugador2 == "papel" || jugador1 == "papel" && jugador2 == "piedra" || jugador1 == "piedra" && jugador2 == "tijera") {
        return "¡Ganador: Jugador 1!";
    } else {
        return "¡Ganador: Jugador 2!";
    }
}

//Tests

test("Los jugadores 1 y 2 ingresan 'piedra'", () => {
    expect(jugar("piedra", "piedra")).toBe("¡Es un empate!");
});

test("El jugador 1 ingresa 'tijera' y el 2 ingresa 'papel'", () => {
    expect(jugar("tijera", "papel")).toBe("¡Ganador: Jugador 1!");
});

test("El jugador 2 ingresa 'tijera' y el 1 ingresa 'papel'", () => {
    expect(jugar("papel", "tijera")).toBe("¡Ganador: Jugador 2!");
});

test("Si se ingresan en mayúscula", () => {
    expect(jugar("TIJERA", "PAPEL")).toBe("¡Ganador: Jugador 1!");
});

test("Jugador 1 ingresa una opción inválida", () => {
    expect(jugar("iguana", "papel")).toBe("Jugador 1 ingresó una opción no válida.");
});

test("Jugador 1 ingresa una opción inválida", () => {
    expect(jugar("tijera", "sapo")).toBe("Jugador 2 ingresó una opción no válida.");
});