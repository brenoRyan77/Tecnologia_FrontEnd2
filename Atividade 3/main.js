var primeiroAluno =  {
    
    nome: 'Igor Beltrão', 
    idade : 26,
    filiacao: ['André Nascimento', 'Luciana Beltrão'],
    endereco: {
        rua: 'Rua vicente ielpo',
        cidade: 'João pessoa', 
        estado: 'Paraiba'
    },
    dadosCompletos: function () {
        if (this.nome == '')
            return false;

        else if (this.idade == 0)
            return false;

        else if (this.filiacao == '', '')
            return false;

        else if (this.endereco.rua == '')
            return false;

        else if (this.endereco.cidade == '')
            return false;
        
        else if (this.endereco.estado == '')
            return false;
        
        else
            return true;     
        
    }
        
    }
    var segundoAluno =  {
        nome: 'Welington Soares', 
        idade : 24,
        filiacao: ['Vânia luscania', 'Ademilton Soarees'],
        endereco: {
            rua: 'Rua presidente epitacio pessoa',
            cidade: 'João pessoa', 
            estado: 'Paraiba'
        },
        dadosCompletos: function () {
            if (this.nome == '')
                return false;
    
            else if (this.idade == 0)
                return false;
    
            else if (this.filiacao == '', '')
                return false;
    
            else if (this.endereco.rua == '')
                return false;
    
            else if (this.endereco.cidade == '')
                return false;
            
            else if (this.endereco.estado == '')
                return false;
            
            else
                return true;
    
        }
    
    }
   valorecebido = function(primeiroAluno, segundoAluno){

       console.log("Nome : ", primeiroAluno.nome)
       console.log("Idade: ", primeiroAluno.idade)
       console.log("Pai: "+ primeiroAluno.filiacao[0] + ", Mãe: " + primeiroAluno.filiacao[1])
       console.log("Rua: " + primeiroAluno.endereco.rua + ", Cidade: " + primeiroAluno.endereco.cidade + ", Estado: " + primeiroAluno.endereco.estado)
       console.log('')
   
    

       console.log("Nome : ", segundoAluno.nome)
       console.log("Idade: ", segundoAluno.idade)
       console.log("Pai: "+ segundoAluno.filiacao[0] + ", Mãe: " + segundoAluno.filiacao[1])
       console.log("Rua: " + segundoAluno.endereco.rua + ", Cidade: " + segundoAluno.endereco.cidade + ", Estado: " + segundoAluno.endereco.estado)
       console.log('')
    
       
       console.log("dados completos? " + primeiroAluno.dadosCompletos())
   }

   valorecebido(primeiroAluno, segundoAluno)