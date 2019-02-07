let params = {
    base: {
        demand:true,
        alias:'b'
    },
    limit: {
        alias :'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', 'Descripcion de Listar', params)
            .command('crear', 'Descripcion de Crear',params)
            .help()
            .argv;

module.exports = {
    argv
}