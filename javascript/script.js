// alert('Hello World')

function sum(){
    //alert('oi')
    var num1 = window.document.getElementById('n1');
    var num2 = window.document.getElementById('n2');
    var res = window.document.getElementById('res');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
     
   var s = n1 + n2;
   
  
   if ( s == 100 ){

    res.innerHTML = `O Valor  ${s} e igual a 100`;

   } else if( s > 100) {

    res.innerHTML = `O Valor  ${s} e maior do que 100`;

    } else {
    res.innerHTML = `O Valor  ${s} eh menor que 100`;
}
}
function mu(){
    alert('oi')
    for (var i = 0; i<10; i++){
        var num = window.document.getElementById('nmult');
        var resmult = window.document.getElementById('resmult');

        var s = num * i;
        resnmult.innerHTML = `${num} x ${i} e igual a ${s}`;
    }

}
