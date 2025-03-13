/*
VERIFICAR

Todo código de barras do tipo EAN tem 13 digitos
Os 12 primeiros dígitos são o número base, o último é o verificador
Para calcular o verificador:
Multiplique os dígitos em posições ímpares por 1
Multiplique os dígitos em posições pares por 3
Some todos os resultados
O dígito verificador é o número que, somado ao total, resulta em um múltiplo de 10
Depois, extraia as informações do código.
Os primeiros 3 dígitos representam o pais de origem
Dos digitos 4 a 7, extraímos o código do fabricante
Os últimos dígitos representam o código do produto.
*/

const paises = [
    "Brasil",
    "Alemanha",
    "França",
    "Itália",
    "Espanha",
    "Japão",
    "Estados Unidos",
    "Canadá",
    "Austrália",
    "China"
];
  
const produtos = [
    "Café em grãos",
    "Chocolate amargo",
    "Queijo brie",
    "Azeite de oliva",
    "Vinho tinto",
    "Chá verde",
    "Pasta de amendoim",
    "Xarope de bordo",
    "Mel orgânico",
    "Molho de soja"
];
  
const codigosEAN13 = [
    "7891234567895",
    "4001234567892",
    "3011234567898",
    "8001234567897",
    "8411234567896",
    "4901234567894",
    "0011234567899",
    "0601234567893",
    "9311234567895",
    "6901234567891"
];


function validarEAN (cod_barras){
    if(cod_barras.length !=13){
        return 'codigo invalido'
    }
    //calcula digito verificador e compara
    cod_barras = cod_barras.split('')
    let soma = 0
    for(let i=0; i<cod_barras.length -1; i++){
        if(i%2!=0){
            soma += parseInt(cod_barras[i]*3)
        }else{
            soma += parseInt(cod_barras[i])
        }
    }
    //pega a variavel soma e ver quanto falta para o proximo multiplo de 10
    let digito = (10- soma%10)%10
    if(digito != cod_barras[12]){
        return 'invalido'
    }


    return 'codigo valido'
}

let codigo = '7891234567895'
let resultado = validarEAN(codigo)
console.log(resultado)  

function procuraProduto(cod_barras){
    //separar os dados do meu cod de barras em pais, fabricante e produto
    //procurar no banco de dados
    //se existir, retorna, se nao existir, envia msg de nao encontrado
}