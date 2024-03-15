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
  

  >[!IMPORTANT]
  > eu amo o soobin