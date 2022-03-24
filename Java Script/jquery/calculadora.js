document.write(`<label for="n1">Primeiro número: </label>`);
document.write(`<input name="n1">`);
document.write(`<hr>`);
document.write(`<label for="n2">Segundo número: </label>`);
document.write(`<input name="n2">`);
document.write(`<hr>`);
document.write(`<button id="som">Somar</button>`);
document.write(`<button id="sub">Subtrair</button>`);
document.write(`<button id="mul">Multiplicar</button>`);
document.write(`<button id="div">Dividir</button>`);
document.write(`<hr>`);
document.write(`<label for="res">Resultado: </label>`);
document.write(`<input readonly name="res">`);
document.write(`<hr>`);
document.write(`<p>`);

$("body").css({textAlign: "center"})

$("#som").click(function(){
    let num1 = parseFloat($(`input[name="n1"]`).val());
    let num2 = parseFloat($(`input[name="n2"]`).val());
    $(`input[name="res"]`).val(num1 + num2);
    $(`p`).text(`O resultado da conta ${num1} + ${num2} é ${num1+num2} `);
})

$("#sub").click(function(){
    let num1 = parseFloat($(`input[name="n1"]`).val());
    let num2 = parseFloat($(`input[name="n2"]`).val());
    $(`input[name="res"]`).val(num1 - num2);
    $(`p`).text(`O resultado da conta ${num1} - ${num2} é ${num1+num2} `);
})

$("#mul").click(function(){
    let num1 = parseFloat($(`input[name="n1"]`).val());
    let num2 = parseFloat($(`input[name="n2"]`).val());
    $(`input[name="res"]`).val(num1 * num2);
    $(`p`).text(`O resultado da conta ${num1} * ${num2} é ${num1+num2} `);
})

$("#div").click(function(){
    let num1 = parseFloat($(`input[name="n1"]`).val());
    let num2 = parseFloat($(`input[name="n2"]`).val());
    $(`input[name="res"]`).val(num1 / num2);
    $(`p`).text(`O resultado da conta ${num1} / ${num2} é ${num1+num2} `);
})

$("button").hover(function(){
    $(this).css({background: "#AABAAB"})
})

$("button").mouseout(function(){
    $(this).css({background: "#EFEFEF"})
})