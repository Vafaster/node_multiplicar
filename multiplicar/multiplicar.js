const fs = require('fs');

let setListar = async (base , limite = 10)=>{
    validationNumber(base);
    validationNumber(limite);
    data='';
    for(let i = 0 ; i< limite ; i++){
        data += `${base} * ${i+1} = ${base *(i+1)}\n`;
    }
    return data;
};

let setEscribir = async(base, limite)=>{
    validationNumber(base);
    validationNumber(limite);
    data = '';
    for(let i = 0 ; i< limite ; i++){
        data += `${base} * ${i+1} = ${base *(i+1)}\n`;
    }

    let path = `./tablas/tabla-${base}.txt`;
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

      return `tabla-${base}.txt`

};

let validationNumber = (myNumber)=>{
   if(!Number(myNumber))
    throw new Error(`Invalid Number ${myNumber}`);
}

module.exports = {
    setListar,
    setEscribir
}