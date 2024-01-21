class heroi {
    aventura(nome, idade, tipo){
     this.nome= nome
     this.idade= idade
     this.tipo= tipo
     }
     
     ataque(mago, guerreiro, monge, ninja){
      if (mago){
      console.log("usou magia")
      } else if(guerreiro) {
      console.log("usou espada")
      } else if(monge){
      console.log("usou artes marciais")
      } else if(ninja) {
      console.log("usou shurikens")
      }
     }
    }
     message();{
     console.log(`O ${tipo} atacou usando ${ataque}`)
     }
    
    let batalha= new heroi ("Perseu", 22, "monge")
batalha.message()