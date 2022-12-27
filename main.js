const form = document.getElementById('form');
const errormensage = document.getElementById('errormensage');


form.addEventListener ("submit", function (e) {
    e.preventDefault();
    ComparaNum();
})

function ComparaNum () {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var NumA = Number(a.value);
    var NumB = Number(b.value);
    const success = document.getElementById('success');

    if (NumA < NumB){
        success.innerHTML = "Enviado com sucesso";
        success.style.display = 'block';
        document.getElementById('a').value=''
        document.getElementById('b').value=''
    } 
    else{
        errormensage.innerHTML = "O valor do campo A é maior que o campo B";
        errormensage.style.display = 'block';
        a.style.border = '1px solid red';
    }
}