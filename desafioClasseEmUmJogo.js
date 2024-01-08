class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroiMago = new Heroi('Gandalf', 150, 'mago');
  const heroiGuerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  
  heroiMago.atacar(); // Saída esperada: "o mago atacou usando magia"
  heroiGuerreiro.atacar(); // Saída esperada: "o guerreiro atacou usando espada"
  