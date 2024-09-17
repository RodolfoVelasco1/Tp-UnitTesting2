//3. Litros de agua por hora
function cantidadAgua (horas){
    let litrosTotal = 0.5 * horas;
    return Math.floor(litrosTotal);
}

//Tests
test("Pedaleó 3 horas", () => {
    expect(cantidadAgua(3)).toBe(1);
});

test("Pedaleó 6.7 horas", () => {
    expect(cantidadAgua(6.7)).toBe(3);
});

test("Pedaleó 11.8 horas", () => {
    expect(cantidadAgua(11.8)).toBe(5);
});

test("Pedaleó 4 horas", () => {
    expect(cantidadAgua(4)).toBe(2);
});

test("Pedaleó 5 horas", () => {
    expect(cantidadAgua(5)).toBe(2);
});