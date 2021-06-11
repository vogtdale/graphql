module.exports = async(_, {}, {models}) => {
    return await models.Users.find()
}