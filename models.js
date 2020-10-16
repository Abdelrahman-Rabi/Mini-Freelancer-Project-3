const users = [
    {
        email : 'admin@gmail.com',
        password : "",
        role_id : 1,
    },
    {
        email : 'freelancer1@gmail.com',
        password : "",
        role_id : 2,
    },
    {
        email : 'freelacner2@gmail.com',
        password : "",
        role_id : 2,
    },
    {
        email : 'guest1@gmail.com',
        password : "",
        role_id : 3,
    },
    {
        email : 'guest2@gmail.com',
        password : "",
        role_id : 3,
    },
]

const posts = [
    {
        post_id : 1,
        freelancer : "FL.name1",
        language : "English",
        skills : ["Frontend", "CSS", "JS"]
    },
    {
        post_id : 2,
        freelancer : "FL.name2",
        language : "French",
        skills : ["Backend", "nodejs", "JS"]
    },
    {
        post_id : 3,
        freelancer : "FL.name3",
        language : "English",
        skills : ["FullStack", "JS", "React"]
    }
]

const roles = [
    {
        id : 1,
        type : "admin",
        permission : ["r", "w", "u", "d"]
    },
    {
        id : 2,
        type : "freelancer",
        permission : ["r", "w", "u"]
    },
    {
        id : 3,
        type : "Gest",
        permission : ["r"]
    }
]
module.exports = {
    users,
    posts,
    roles,
};
