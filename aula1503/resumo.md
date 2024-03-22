# Resumo de JavaScript

## Variáveis
### Delcaração de variáveis
Para termos uma variável precisamos declará-la antes, existem três formas de declará-las. Sendo elas `let`, `var` e `const`

`let` -> Ao declarar variáveis com o let você terá variáveis limitadas ao escopo que está definida. Ex: quando declaramos uma variável em um `for` ou em um `if`

``` JavaScript
function(){
    let ex1 = 3;
}
```


`var` -> Ao declarar variáveis com o var você terá variáveis ilimitadas ao escopo. Ou seja, a variável não precisa ser declarada dentro de um escopo específico.
``` JavaScript
var ex2 = 2
function(){
}
```


`const` -> Ao declarar uma variável com o const a variável terá um valor contate que não pode ser alterado e também é limitada ao escopo do bloco.

``` JavaScript
const ex3 = 1;
```

### Escopo
- Global

-> O escopo global é onde uma variável é acessivel em todo o código, não dependendo de onde foi declarada. Quando uma variável não é declarada dentro de qualquer função ou bloco, ela é uma variável global. Ex:

``` JavaScript
var glob = 5;
function ex1(){
  console.log(glob);
}
```
  
- Bloco

-> O escopo de bloco é quando uma variável é declarada dentro de um bloco e assim ela só pode ser usada dentro do bloco em que foram declaradas. O bloco é determinado por chaves. Ex:

``` JavaScript
if (True){
  var block = 30;
}
```
  
- Função

-> O escopo de função é quando uma variável é declarada dentro de uma função. Podendo ser acessada apenas dentro da função em que foi declarada.

``` JavaScript
function ex2(){
  var func = 24;
}
```

## Tipos de dados
### Tipos primitivos
- Boolean

-> Dado booleano é o tipo de dado que possuí apenas dois valores, sendo eles o `true` e o `false`. Geralmente é usado em expressões lógicas e condicionais para representar uma condição ou comparação. Ex:

```JavaScript
var idade = 16
var adulto = idade>=18
console.log(adulto);
// o resultado será "false"
```

- Number

-> O dado Number é o dado que representa todos os números em JavaScript, ele pode armazenar numeros inteiros, decimais, negativos e até mesmo notações científicas. Ex:

```JavaScript
var inteiro = 20;
var decimal = 3.14;
var negativo = -5;
var not_cientifica = 1.2e7;
```

- String

-> O dado String é uma sequência de caracteres que é usada para representar textos e representa um único dado. É delimitada por aspas simples ou aspas duplas (Lembrando que as aspas precisam se corresponder, ou seja, ao definir uma variável tipo string, se no início uma aspas simples foi colocada, no final também terá que ser uma aspas simples).

No JavaScript, strings são imutáveis! isso significa que precisamos manipular uma string utilizando métodos de string embutidos caso queira mudar o dado de uma tring.

Com as strings podemos fazer várias coisas, como concatenar duas strings usando o operador de adição (+) ou o método `concat()`
```JavaScript
var good = 'Bom'; // definindo variáveis
var day = "dia!";

var gd = good + " " + day //concatenando
console.log(gd); // irá retornar "Bom dia!"

var gd_modificado = gd.toUpperCase(); //manipulando uma string
console.log(gd_modificado); //irá retornar "BOM DIA!"
```

- Undefined

-> Undefined é o dado que representa a falta de um valor ou de definição de variável. O undefined é o valor que é definido à uma variável quando não damos um valor à tal ou até mesmo quando atribuimos um valor à variável mas a mesma não é inicializada. Ex:
```JavaScript
var u;
console.log(u); //retornará "undefined"


function ex(){
}
console.log(ex()) //retornará "undefined"
```

- Null

-> O Null é o tipo de dado que representa a ausência intencional de um valor.É usada para mostrar que uma variável não contém nenhum valor, e deve ser definida explicitamente à uma variável. Ex:
```JavaScript
var n = null;
console.log(n); //retornará "null"
```
<!--   

  >[!IMPORTANT] TEM Q INSTALAR EXTENSÃO
  > eu amo o soobin -->


### Objeto
- Um objeto em JS pode ser comparado com um carro na vida real. Assim como um carro, um objeto tem propriedades (como cor) e métodos (como iniciar). Todos os objetos possuem as mesmas propriedades, mas os valores das propriedades diferem de objeto para objeto, assim como os carros.
Todos os carros possuem os mesmos métodos, mas os métodos são executados em momentos diferentes.
Os objetos podem conter muitos valores. Para definir ou criar um objeto, devemos criá-lo como um objeto literal.
Objetos em JavaScript são muito flexíveis e poderosos, permitindo a criação de estruturas de dados complexas e a implementação de funcionalidades através de métodos.

Ex de criação de objeto:
``` Javascript
const pessoa = { Pnome:"Rebecca", Unome:"Silva", idade:"25"
}
```

### Array

Arrays são variáveis que podem conter mais de um valor. Um array é como um conjunto de variáveis 

## Operadores básicos

### Aritméticos
No JavaScript temos os quatro tipos de operadores aritméticos padrão, a soma, subtração, multiplicação e divisão e mais seis operadores disponibilizados pelo JavaScript.
Os operadores Aritméticos recebem valores numéricos com o seu operando e retornam um único valor numérico. Ex:

- Soma (+):

O operador de soma é simples, devemos apenas colocar o sinal de soma entre os números desejados (podemos fazer uma soma com mais de dois números).

``` JavaScript
console.log(2+3) //Irá retornar "5", a soma de 2 e 3
```

- Subtração (-):

Funciona da mesma forma que a soma (podemos fazer uma subtração com mais de dois números).
``` JavaScript
console.log(10-4) //Irá retornar 6, a sibtração entre 10 e 4
```

- Multiplicação (*):

Da mesma forma que a soma e subtração, e também podemos fazer uma multiplicação com mais de dois números.
``` JavaScript
console.log(2*10) //Irá retornar 20, a multiplicação entre 2 e 10
```


- Divisão (/):

Funciona da mesma formaa que os anteriores.
``` JavaScript
console.log(100/2) //Irá retornar 50, que é a divisão de 100 e 2
```

- Módulo (%):

O módulo é um operador binário que retorna o inteiro restando da divisão entre dois números. Devemos colocar dividendo, módulo(%) e o divisor. Ex:
``` JavaScript
console.log(12%2) //Irá retornar 2, que é o número de resto entre a divisão.
```

- Incremento (++):

É um operador unário que adiciona um ao seu operando, ao colocá-lo antes de um número ou variável. Caso colocado depois do número ou variável, o que retornará será o valor do operando antes da adição. Ex:
``` JavaScript
var x = 5;
console.log(++x) //O valor retornado será 4

console.log(x++) //retorna 3, o operando antes da adição
```

- Decremento (--):

É um operador unário que ao adicionar -- antes do número ou variavel, subtrai um de seu operando. E ao adicionar -- depois do número ou variável, retorna o valor do operando antes da subtração. Ex:
``` JavaScript
var y = 4;
console.log(--y) //Será retornado o número 3

console.log(x--) //Retorna o número 4, o operando antes da subtração
```

- Exponenciação (**):

Eleva o primeiro operando à potência do segundo operando. Ex:
``` JavaScript
let p = 5
console.log(x**2) // retorna 25, o quadrado de 5
```

### De comparação

### Lógicos

### Typeof




<!-- 
---
  ## Exercicios de fixação

  ### Sobre variáveis
1 - Qual declaração de variável pode ser usada no escopo Global?

2 - Qual a diferença entre o escopo de bloco e o escopo de função?

  ---
  ### Sobre Dados - tipos primitivos
3 - Qual a diferença entre os dados Undefined e Null?


---
  ## Gabarito
  1 - Declaração de variável `Var`

  2 - O escopo de função é delimitado a especificamente a função, e escopo de bloco é relacioando a um escopo que forme um bloco, como um `if` ou um `for`

  3 - A diferença é que o `Undefined` é um valor atribuiudo automáticamente ao dado que não ganha um valor pelo usuáriuo ou programador. O `Null` é um valor atribuído propositalmente. -->

