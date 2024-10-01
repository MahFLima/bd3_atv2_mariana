const database = 'BD3-ATV2'

const collection = 'BD3-ATV2-PRODUTOS'

use(database)

db[collection].find({
  $or:[
    {categoria: {$eq: 'Acessórios'}},
    {categoria: {$eq: 'Calçados'}}
  ]
})
