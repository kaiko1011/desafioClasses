//classe de herois

class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = " "
        switch(this.tipo){
           case "guerreiro" :
              ataque = "espada"
            break;
            case "mago" :
                ataque = "magia"
            break;
            case "monge" :
                ataque = "artes marciais"
            break;
            case "ninja" :
                ataque = "shuriken"
            break;
            default :
                ataque = "as própias mãos"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const Mago = new Heroi("Merlin", 101 , "mago" )
const Guerreiro = new Heroi("Goldar",200,"guerreiro")
const Monge = new Heroi("Matusalem", 110 , "monge")
const Ninja = new Heroi("Brece Lee", 90 , "ninja")
const Boxeador = new Heroi("Brece Lee", 90 , "boxeador")
Mago.atacar()
Guerreiro.atacar()
Monge.atacar()
Ninja.atacar()
Boxeador.atacar()
