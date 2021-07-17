var botao = window.document.querySelector('input#verificar')
botao.addEventListener('click', clicar)
function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if(fano.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero	= 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if(idade<21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade<50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if(idade<21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if(idade<50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        else{
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)
    }
 
    
    
}