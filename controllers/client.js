const db = require('../utils/db');

const clientMilk = async (req, res) => {

  const {start_date, end_date} = req.query;

  try {
    const clientMilkExists = db('produtos')
    .join('item_compra', 'item_compra.id_produto','produtos.id')
    .join('compras', 'compras.id', 'item_compra.id_compra')
    .join('usuario', 'compras.id_usuario', 'usuario.id')
    .select('usuario.nome', 'usuario.id as usuario_id', 'compras.data_compra');

    if(start_date && end_date){
      clientMilkExists
      .where('compras.data_compra', '>=', start_date || 'compras.data_compra', '<=', end_date);

    }

    const joinClientMilkExists = await clientMilkExists;

    if (joinClientMilkExists.length === 0) {
      return res.status(404).json('não encontrado');
    }

    return res.status(200).json(joinClientMilkExists);

  } catch (error) {

    return res.status(400 || error.status).json(error.message);
  }

};



module.exports = {
  clientMilk
};