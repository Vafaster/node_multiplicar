
const {setListar,setEscribir} = require('./multiplicar/multiplicar.js');
const {argv} = require('./conf/conf.js');
const colors = require('colors');
let param = argv._[0];
let base = argv.base;
let limit = argv.limit;


switch(param){
  case 'listar': 
          setListar(base, limit).then(resp => {
            console.log(resp)
          })
          .catch(err => console.log(colors.red(`${err}`)));
          ; break;
  case 'crear': 
          setEscribir(base, limit).then(
            resp => {console.log(`Archivo creado ${resp}`);}
          ).catch(err => console.log(err.red));
           ;break;
  default: console.log(`Invalid Parameter ${colors.green(param)}`);
}

