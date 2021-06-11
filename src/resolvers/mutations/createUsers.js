const {ApolloError} = require("apollo-server")

module.exports = async(_, {input}, {models}) => {
    try {
        newUsers = await models.Users.create(input)
        return newUsers
        
    } catch (e) {
        throw new ApolloError(e)
    } 
}