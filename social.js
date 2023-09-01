;
const users = [{ name: "waheed", id: 1 },
    { name: "sultan", id: 2 },
    { name: "arsal", id: 3 }];
const Likes = [{ user: users[0], timestamp: new Date },
    { user: users[1], timestamp: new Date },
    { user: users[2], timestamp: new Date }];
;
///
const Posts = [{ title: "my billo", content: "dasdasd", likedby: [Likes[0]], userwholiked: [users[0]] },
    { title: "my bage", content: "sadds", likedby: [Likes[1], Likes[2]], userwholiked: [users[1], users[2]] },
    { title: "my sch", content: "dasdasd", likedby: [Likes[0], Likes[1], Likes[2]], userwholiked: [users[0], users[1], users[2]] }];
//
const profiles = [{
        id: 11, username: "Rajawaheed", bio: "Good boy", hisposts: [Posts[0]]
    }, {
        id: 11, username: "yaseen", bio: "Good boy", hisposts: [Posts[1], Posts[2]]
    }];
//
//
function sortmostlikedpost(Posts) {
    return Posts.slice().sort(function (a, b) {
        if (a.likedby.length > b.likedby.length) {
            return -1;
        }
        else if (a.likedby.length < b.likedby.length) {
            return 1;
        }
        return 0;
    });
}
;
///
const sortedlikedpost = sortmostlikedpost(Posts);
sortedlikedpost.forEach(function (post, index) {
    const author = profiles.find(profile => profile.hisposts.includes(post));
    console.log(`${index + 1}: most liked post is "${post.title}" and it was posted by ${author?.username}`);
});
export {};
