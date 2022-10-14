class Animal {

    nombre: string
    color: string
    tipo: string
    extinto: boolean
    constructor(nombre: string, color: string, tipo: string, extinto: boolean,) {
        this.color = color
        this.extinto = extinto
        this.nombre = nombre
        this.tipo = tipo
    }

    imprimirTodo() {
        console.log(this.color,
            this.extinto,
            this.nombre,
            this.tipo,)


    }

    emiteSonido(tipoDeSonido:string){
console.log("yo hago", tipoDeSonido)
    }
}

const gato = new Animal("Puca","naranja","vieja",false)
gato.imprimirTodo()
gato.emiteSonido("miauuuuuuuuuuuuuuuuuuuuuuuuuu")
const perro = new Animal("beba", "cafe", "vieja", true)
perro.imprimirTodo()
perro.emiteSonido("guauuuuuuuuuuuuuuuuuuuuuguauauauuauauauuuauuauauauaaaauau")