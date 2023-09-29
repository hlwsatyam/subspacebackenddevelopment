
const _ = require("lodash");

module.exports.SearchBlogsUsingParams = async (req, res) => {
    const { query } = req.query

    const options = {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
    };
    try {
        const response = fetch('https://intent-kit-16.hasura.app/api/rest/blogs', options)
            .then(response => response.json())
            .then(response => {
                const SearchedBlogsUsingQuery = _.filter(response.blogs, (item) => {
                    return _.includes(item.title.toLowerCase(), query.toLowerCase())
                })
                return res.send({ SearchedBlogsUsingQuery: SearchedBlogsUsingQuery })
            })
            .catch(err => res.status(500).send({ Error: "Server Error" }));
    } catch (error) {
        return res.send(console.log(error))
    }

}