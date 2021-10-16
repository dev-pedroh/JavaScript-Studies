//é utilizado para tratativas de erros

function dividir(num1, num2){
    if(num1===0 || num2===0){
        throw("Os valores devem ser positivos.");
    }else{
        return num1/num2;
    }
}

//estrutura
try{
    let ret = dividir(5,3);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.');
}finally{
    console.log('Vamos continuar...');
}