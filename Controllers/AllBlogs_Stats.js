
const _ = require("lodash");
const fetch = require("node-fetch");

module.exports.AllBlogs = async (req, res) => {

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

                // Total number of blogs
                const TotalNoBlogs = _.size(response.blogs)

                // The title of the longest blog.
                const LongestTitle = _.maxBy(response.blogs, (blog) => { return blog.title.length })

                // Number of blogs with "privacy" in the title.
                const BlogsWithPrivacyKey = _.filter(response.blogs, (blog) => {
                    return _.includes(blog.title, "privacy")
                })
                const lengthOfBlogsWithPrivacyKey = _.size(BlogsWithPrivacyKey)

                // an array of unique blog titles
                const BlogsGroupTitle = _.groupBy(response.blogs, 'title');
                const ArrayOfUniqueBlogsWithTitle = _.filter(BlogsGroupTitle, (item) => item.length === 1);

                return res.send({ TotalNoBlogs: TotalNoBlogs, LongestTitle: LongestTitle.title, lengthOfAllBlogsWithPrivacyKey: lengthOfBlogsWithPrivacyKey, ArrayOfUniqueBlogsWithTitle: ArrayOfUniqueBlogsWithTitle })
            })
            .catch(err => res.status(500).send({ Error: "Server Error" }));
    } catch (error) {
        return res.send(console.log(error))
    }




}