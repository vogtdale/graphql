const {ApolloError} = require("apollo-server")

module.exports = async(_, {id, input}, {models}) => {
    try {

        const userToUpdate = await models.Users.findOne({_id: id})

        if (!userToUpdate) throw new ApolloError(`Couldn't find user with id: '${id}'.`, 500)

        Object.keys(input).forEach(value => {
            userToUpdate[value] = input[value]
        })

        const updatedUser = await userToUpdate.save()
        return updatedUser

        
    } catch (e) {
        throw new ApolloError(e)
    }
}
