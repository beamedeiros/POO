let estrutura = new Set()

estrutura.add(1)
estrutura.add(function(){
    return 'função dentro do set'
})
estrutura.add('1')
console.log(estrutura.size)