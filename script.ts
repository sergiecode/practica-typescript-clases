
// La clase es una especie de molde (para hacer muchos negocios desde el molde)
class Negocio {

    //atributos de clase (que son las características del negocio)
    private nombre: string // este nombre es una característica del negocio
    private direccion: string
    private telefono: number
    private abierto?: boolean // Tiene signo de pregunta porque no lo definí en el constructor

    constructor(      // Es un método que recibe parámetros y se utiliza para instanciar un negocio
        nombre: string, // este nombre es el que le paso al constructor
        direccion: string, 
        telefono: number,
        ){
        this.nombre = nombre; // el nombre que le paso al constructor lo asigno al "nombre" de la clase
        this.direccion = direccion;
        this.telefono = telefono;
    }
    
    getNombre():string{ // este método se usa para conseguir el "nombre" de la clase
        return this.nombre
    }
    setNombre(nombre:string){ // este método se usa para setear el "nombre" de la clase
        this.nombre = nombre // si tenía nombre lo sobreescribe
    }
    getDireccion():string{
        return this.direccion
    }
    setDireccion(direccion:string){
        this.direccion = direccion
    }
    getTelefono():number{
        return this.telefono
    }
    setTelefono(telefono:number){
        this.telefono = telefono
    }
    getAbierto():boolean{
        return this.abierto as boolean
    }
    setAbierto(abierto:boolean){
        this.abierto = abierto
    }

    estaAbierto(){
        const horaActual:number = new Date().getHours()
        const horaAbre: number = 8
        const horaCierra: number= 20

        if(horaActual >= horaAbre && horaActual < horaCierra){
            this.setAbierto(true)
            return 'Esta Abierto'
        }else{
            this.setAbierto(false)
            return 'Está cerrado'
        }

    }

    delivery(distancia:number){
        return distancia > 15 ? "El servicio de delivery no está disponible" : 'El servicio de delivery está disponible'
    }

    recomendar():string{
        return `${this.nombre} agradece tu recomendación`
    }

}

// Acá instanciamos (se crea) un negocio peluquería con los siguientes atributos:
// Los 3 datos que le paso son los que recibe el constructor
const peluqueria = new Negocio('Tijeras', 'Scabritney 123', 1198765412)