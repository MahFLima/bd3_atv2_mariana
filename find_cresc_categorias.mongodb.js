const database = 'BD3-ATV2'

const collection = 'BD3-ATV2-PRODUTOS'

use(database)

db[collection].find({
  categoria: {$eq: 'Acessórios'}
}).sort({valor: 1})