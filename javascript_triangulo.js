
var a = prompt('Digite o 1º numero')
var b = prompt('Digite o 2º numero')
var c = prompt('Digite o 3º numero')

console.log(a)
console.log(b)
console.log(c)

if (a == b && a == c) {
        console.log('Seu Triangulo é Equilátero')
        alert('Seu Triangulo é Equilátero')
        } else if (a == b || a == c || b == c) {
            console.log('Seu Triangulo é Isosceles')
            alert('Seu Triangulo é Isosceles')
            }else {
                console.log('Seu Triangulo é Escaleno')
                alert('Seu Triangulo é Escaleno')
                } 

    


        //equilátero, isóceles ou escaleno