const database = 'BD3-ATV2'

const collection = 'BD3-ATV2-PRODUTOS'

use(database)

db[collection].insertMany([
  { nome: "Saia Jeans", valor: 69.90, quantidade: 150, fabricante: "DenimTrends", categoria: "Roupas", descricao: "Saia jeans com corte clássico." },
  { nome: "Camiseta Longa", valor: 49.90, quantidade: 140, fabricante: "SleeveStyle", categoria: "Roupas", descricao: "Camiseta de manga longa para dias frescos." },
  { nome: "Calça de Alfaiataria", valor: 119.90, quantidade: 80, fabricante: "SmartLook", categoria: "Roupas", descricao: "Calça de alfaiataria elegante." },
  { nome: "Regata de Seda", valor: 89.90, quantidade: 90, fabricante: "SilkElegance", categoria: "Roupas", descricao: "Regata de seda com toque suave." },
  { nome: "Blazer Casual", valor: 199.90, quantidade: 50, fabricante: "ClassyFit", categoria: "Roupas", descricao: "Blazer leve e estiloso para o dia a dia." },
  { nome: "Conjunto de Pijama", valor: 79.90, quantidade: 100, fabricante: "SleepWell", categoria: "Pijamas", descricao: "Conjunto de pijama confortável em algodão." }
]);
