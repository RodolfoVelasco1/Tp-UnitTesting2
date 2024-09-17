const { emptyStatement } = require("@babel/types");

//6. Validador de direcciones
function validarDireccion(direccion){
    if (!direccion.street){
        return "Error: La calle está vacía. Por favor, ingrese un valor válido en 'street'.";
    } else if (direccion.number == undefined){
        return "Error: El número está vacío. Por favor, ingrese un valor válido en 'number'.";
    } else if (direccion.zip_code == undefined){
        return "Error: El código postal está vacío. Por favor, ingrese un valor válido en 'zip_code'.";
    } else if (!direccion.city){
        return "Error: La ciudad está vacía. Por favor, ingrese un valor válido en 'city'.";
    } else if (!direccion.province){
        return "Error: La provincia está vacía. Por favor, ingrese un valor válido en 'province'.";
    }

    if(!direccion.floor_apartment != undefined && typeof direccion.floor_apartment !== 'string'){
        return "Error: El valor ingresado en 'floor_apartment' debe ser de tipo texto (string)";
    } else if (!direccion.town != undefined && typeof direccion.town !== 'string'){
        return "Error: El valor ingresado en 'town' debe ser de tipo texto (string)";
    }

    if (typeof direccion.street !== 'string'){
        return "Error: El valor ingresado en 'street' debe ser de tipo texto (string)";
    } else if (typeof direccion.number !== 'number'){
        return "Error: El valor ingresado en 'number' debe ser de tipo numérico (number)";
    } else if (typeof direccion.zip_code !== 'number'){
        return "Error: El valor ingresado en 'zip_code' debe ser de tipo numérico (number)";
    } else if (typeof direccion.city !== 'string'){
        return "Error: El valor ingresado en 'city' debe ser de tipo texto (string)";
    } else if (typeof direccion.province !== 'string'){
        return "Error: El valor ingresado en 'province' debe ser de tipo texto (string)";
    } else {
        return "Los datos ingresados son correctos."
    }
}

//Tests

test('Todos los datos están completos', () => {
    const direccion = {
      street: "Salta",
      number: 359,
      floor_apartment: "D3",
      zip_code: 5500,
      town: "Quinta Sección",
      city: "Mendoza",
      province: "Mendoza"
    };
    expect(validarDireccion(direccion)).toBe("Los datos ingresados son correctos.");
});
  
test('El campo opcional "town" está vacío', () => {
    const direccion = {
      street: "Salta",
      number: 359,
      floor_apartment: "D3",
      zip_code: 5500,
      town: "",
      city: "Mendoza",
      province: "Mendoza"
    };
    expect(validarDireccion(direccion)).toBe("Los datos ingresados son correctos.");
});

test('El campo opcional "floor_apartment" está vacío', () => {
    const direccion = {
      street: "Salta",
      number: 359,
      floor_apartment: "",
      zip_code: 5500,
      town: "Quinta Sección",
      city: "Mendoza",
      province: "Mendoza"
    };
    expect(validarDireccion(direccion)).toBe("Los datos ingresados son correctos.");
});

test('El campo obligatorio "street" está vacío', () => {
    const direccion = {
      street: "",
      number: 359,
      floor_apartment: "D3",
      zip_code: 5500,
      town: "Quinta Sección",
      city: "Mendoza",
      province: "Mendoza"
    };
    expect(validarDireccion(direccion)).toBe("Error: La calle está vacía. Por favor, ingrese un valor válido en 'street'.");
});

test('El campo "number" es de tipo "string"', () => {
    const direccion = {
      street: "Salta",
      number: "359",
      floor_apartment: "D3",
      zip_code: 5500,
      town: "Quinta Sección",
      city: "Mendoza",
      province: "Mendoza"
    };
    expect(validarDireccion(direccion)).toBe("Error: El valor ingresado en 'number' debe ser de tipo numérico (number)");
});