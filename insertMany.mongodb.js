const database = 'BD3-ATV2'

const collection = 'BD3-ATV2-PRODUTOS'

use(database)

db[collection].insertMany([
  { nome: "Camisa Estampada", valor: 59.90, quantidade: 150, fabricante: "StyleWave", categoria: "Roupas", descricao: "Camisa de algodão com estampa floral." },
  { nome: "Calça Jeans", valor: 89.90, quantidade: 200, fabricante: "UrbanTrends", categoria: "Roupas", descricao: "Calça jeans com corte reto." },
  { nome: "Vestido Midi", valor: 119.90, quantidade: 100, fabricante: "ChicBoutique", categoria: "Roupas", descricao: "Vestido midi leve e confortável." },
  { nome: "Saia Plissada", valor: 79.90, quantidade: 120, fabricante: "Elegance", categoria: "Roupas", descricao: "Saia plissada perfeita para ocasiões especiais." },
  { nome: "Jaqueta de Couro", valor: 199.90, quantidade: 80, fabricante: "LeatherCraft", categoria: "Roupas", descricao: "Jaqueta de couro sintético, estilo biker." },
  { nome: "Tênis Casual", valor: 129.90, quantidade: 200, fabricante: "StepUp", categoria: "Calçados", descricao: "Tênis casual com conforto extra." },
  { nome: "Bota de Cano Alto", valor: 159.90, quantidade: 70, fabricante: "SoleStyle", categoria: "Calçados", descricao: "Bota de couro sintético com salto." },
  { nome: "Sandália Confortável", valor: 79.90, quantidade: 150, fabricante: "EasyFeet", categoria: "Calçados", descricao: "Sandália com palmilha macia." },
  { nome: "Camiseta Básica", valor: 39.90, quantidade: 300, fabricante: "BasicFit", categoria: "Roupas", descricao: "Camiseta básica de algodão, disponível em várias cores." },
  { nome: "Blusa de Frio", valor: 89.90, quantidade: 110, fabricante: "WarmWear", categoria: "Roupas", descricao: "Blusa de frio aconchegante." },
  { nome: "Shorts Jeans", valor: 49.90, quantidade: 140, fabricante: "CasualDenim", categoria: "Roupas", descricao: "Shorts jeans com lavagem clara." },
  { nome: "Macacão Casual", valor: 119.90, quantidade: 90, fabricante: "TrendyOutfit", categoria: "Roupas", descricao: "Macacão casual, perfeito para o dia a dia." },
  { nome: "Bolsa Tote", valor: 99.90, quantidade: 130, fabricante: "BagIt", categoria: "Acessórios", descricao: "Bolsa tote espaçosa e estilosa." },
  { nome: "Cinto de Couro", valor: 39.90, quantidade: 200, fabricante: "BeltMaster", categoria: "Acessórios", descricao: "Cinto de couro sintético com fivela elegante." },
  { nome: "Relógio Casual", valor: 159.90, quantidade: 60, fabricante: "TimeStyle", categoria: "Acessórios", descricao: "Relógio casual com pulseira de silicone." },
  { nome: "Óculos de Sol", valor: 89.90, quantidade: 150, fabricante: "SunGuard", categoria: "Acessórios", descricao: "Óculos de sol com proteção UV." },
  { nome: "Colar Delicado", valor: 49.90, quantidade: 180, fabricante: "JewelryArt", categoria: "Acessórios", descricao: "Colar delicado com pingente." },
  { nome: "Brinco de Argola", valor: 29.90, quantidade: 220, fabricante: "FashionEars", categoria: "Acessórios", descricao: "Brinco de argola leve e moderno." },
  { nome: "Pashmina", valor: 69.90, quantidade: 140, fabricante: "SoftWraps", categoria: "Acessórios", descricao: "Pashmina macia e versátil." },
  { nome: "Cachecol Estampado", valor: 39.90, quantidade: 100, fabricante: "CozyScarves", categoria: "Acessórios", descricao: "Cachecol com estampas variadas." },
  { nome: "Biquíni", valor: 79.90, quantidade: 80, fabricante: "BeachWear", categoria: "Moda Praia", descricao: "Biquíni com estampas vibrantes." },
  { nome: "Saída de Praia", valor: 69.90, quantidade: 70, fabricante: "SunnyStyles", categoria: "Moda Praia", descricao: "Saída de praia leve e fresca." },
  { nome: "Maiô Estiloso", valor: 99.90, quantidade: 60, fabricante: "SwimChic", categoria: "Moda Praia", descricao: "Maiô com design moderno." },
  { nome: "Chapéu de Praia", valor: 49.90, quantidade: 90, fabricante: "ShadeSafe", categoria: "Moda Praia", descricao: "Chapéu de palha para proteção solar." },
  { nome: "Camiseta de Surf", valor: 49.90, quantidade: 150, fabricante: "WaveRider", categoria: "Moda Praia", descricao: "Camiseta leve para dias de praia." },
  { nome: "Regata Colorida", valor: 39.90, quantidade: 120, fabricante: "VibrantStyle", categoria: "Roupas", descricao: "Regata colorida e fresca para o verão." },
  { nome: "Calça de Moletom", valor: 79.90, quantidade: 100, fabricante: "ComfyWear", categoria: "Roupas", descricao: "Calça de moletom confortável." },
  { nome: "Sapatilha", valor: 89.90, quantidade: 90, fabricante: "EasyWalk", categoria: "Calçados", descricao: "Sapatilha leve e versátil." },
  { nome: "Bermuda de Linho", valor: 59.90, quantidade: 110, fabricante: "LinenStyle", categoria: "Roupas", descricao: "Bermuda de linho ideal para o verão." },
  { nome: "Casaco de Inverno", valor: 249.90, quantidade: 50, fabricante: "WinterWear", categoria: "Roupas", descricao: "Casaco quentinho e elegante." },
  { nome: "Camiseta de Banda", valor: 49.90, quantidade: 200, fabricante: "RockFashion", categoria: "Roupas", descricao: "Camiseta com estampa de banda." },
  { nome: "Conjunto de Moletom", valor: 119.90, quantidade: 80, fabricante: "CasualFit", categoria: "Roupas", descricao: "Conjunto confortável para o dia a dia." },
  { nome: "Tênis de Corrida", valor: 139.90, quantidade: 100, fabricante: "RunFast", categoria: "Calçados", descricao: "Tênis de corrida com boa amortização." },
  { nome: "Chinelo de Dedo", valor: 29.90, quantidade: 300, fabricante: "BeachFeet", categoria: "Calçados", descricao: "Chinelo de dedo confortável para o verão." },
  { nome: "Boné Estampado", valor: 49.90, quantidade: 150, fabricante: "CapTrend", categoria: "Acessórios", descricao: "Boné com estampas modernas." },
  { nome: "Moletom com Capuz", valor: 99.90, quantidade: 120, fabricante: "HoodedComfort", categoria: "Roupas", descricao: "Moletom com capuz e bolso canguru." },
  { nome: "T-shirt Gráfica", valor: 59.90, quantidade: 160, fabricante: "GraphicTee", categoria: "Roupas", descricao: "T-shirt com estampa gráfica." },
  { nome: "Camiseta de Poliéster", valor: 39.90, quantidade: 180, fabricante: "PolyBlend", categoria: "Roupas", descricao: "Camiseta de poliéster leve." },
  { nome: "Casaco Leve", valor: 89.90, quantidade: 90, fabricante: "LightLayer", categoria: "Roupas", descricao: "Casaco leve, ideal para meia-estação." },
  { nome: "Bolsa de Ombro", valor: 109.90, quantidade: 110, fabricante: "ShoulderStyle", categoria: "Acessórios", descricao: "Bolsa de ombro espaçosa." },
  { nome: "Chinelo de Couro", valor: 39.90, quantidade: 120, fabricante: "SoleComfort", categoria: "Calçados", descricao: "Chinelo de couro elegante." },
  { nome: "Saia Jeans", valor: 69.90, quantidade: 150, fabricante: "DenimTrends", categoria: "Roupas", descricao: "Saia jeans com corte clássico." },
  { nome: "Camiseta Longa", valor: 49.90, quantidade: 140, fabricante: "SleeveStyle", categoria: "Roupas", descricao: "Camiseta de manga longa para dias frescos." },
  { nome: "Calça de Alfaiataria", valor: 119.90, quantidade: 80, fabricante: "SmartLook", categoria: "Roupas", descricao: "Calça de alfaiataria elegante." }
]);

