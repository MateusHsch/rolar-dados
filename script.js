
const audio = document.getElementById('rolagem-audio')
audio.volume = 0.2
const resultado = document.querySelector('.resultado')

function rolarDados(prompt){

    prompt = prompt.split(/[dD]/)
    if (prompt.length === 2){
        let dados = []
        let res = 0
        let parte_1 = prompt[0].split(/(?<=-|\+)/)
        let parte_2 = prompt[1].split(/(?=-|\+)/)
        if (!isNaN(parte_1[0]) && !isNaN(parte_2[0])) {
            for (let i=0; i<Number(parte_1[0]); i++) {
                dados.push(Math.floor(Math.random() * (Number(parte_2[0])) + 1))
                res += dados[i]
            }

            if (parte_2.length === 2) {
                parte_2[1] = parte_2[1].replace(/\s+/g, "")
            }

            if (!isNaN(parte_2[1])) {
                res += Number(parte_2[1])
            }

            inserirResultado(dados, res)
        }else {
            if (!isNaN(parte_1[1]) && !isNaN(parte_2[0])) {
                for (let i=0; i<Number(parte_1[1]); i++) {
                    dados.push(Math.floor(Math.random() * (Number(parte_2[0])) + 1))
                }
    
                if (parte_1[0] === '+') {
                    res = Math.max(...dados)
                }
                if (parte_1[0] === '-') {
                    res = Math.min(...dados)
                }
    
                if (parte_2.length === 2) {
                    parte_2[1] = parte_2[1].replace(/\s+/g, "")
                }
                
                if (!isNaN(parte_2[1])) {
                    res += Number(parte_2[1])
                }

                inserirResultado(dados, res)
            }
        }
    }
}

function inserirResultado(dados, res){
    audio.play()

    let saida = ''
    for (let dado of dados) {
        saida = saida + '[' + String(dado) + ']'
    }
    saida = saida + ' = ' + String(res)

    resultado.innerHTML = ''

    roll_box = document.createElement('div')
    roll_box.setAttribute('class','roll-box')

    d_20 = document.createElement('img')
    d_20.setAttribute('src','images/d20-icon2.png')
    roll_box.appendChild(d_20)

    rolagem = document.createElement('span')
    rolagem.innerText = saida
    roll_box.appendChild(rolagem)

    resultado.appendChild(roll_box)
}
