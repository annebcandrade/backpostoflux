
import { v4 } from 'uuid'
import User from '../models/User'

class UserController{
    async store(request,response){
        
        const { name, cpf, fueltype, quantity } = request.body

        const fuelPrices = {
            Gasolina: 5.82, // Preço por litro de gasolina
            Etanol: 3.56,  // Preço por litro de etanol
            Diesel: 4.00   // Preço por litro de diesel
        }

        if (!fuelPrices[fueltype]) {
            return response.status(400).json({ error: 'Tipo de combustível inválido' })
          }

          const totalAmount = quantity * fuelPrices[fueltype]

        const user = await User.create({
        id: v4(), 
        name,
        cpf,
        fueltype,
        quantity,
        amount: `R$${totalAmount.toFixed(2)}`,
    })

      return response.status(201).json(user)
    }

    async findByCPF(request, response) {
        try {
          const { cpf } = request.params;
          const user = await User.findAll({
            where: { cpf },
          });
    
          if (!user) {
            return response.status(404).json({ error: 'Usuário não encontrado' });
          }
    
          return response.json(user);
        } catch (error) {
          return response.status(500).json({ error: 'Erro ao buscar usuário por CPF' });
        }
      }
}

export default new UserController()