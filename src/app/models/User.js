import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            cpf: Sequelize.STRING,
            fueltype: Sequelize.STRING,
            quantity: Sequelize.STRING, 
            amount: Sequelize.STRING,
        }, {
            sequelize,
        }
    )
}
}

export default User