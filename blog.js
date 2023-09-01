;
const author0 = { id: 1, name: "Arsal", bio: "busy" };
const author1 = { id: 2, name: "Sultan", bio: "at work" };
const author2 = { id: 3, name: "waheed", bio: "trader" };
const Comment1 = { author: author0,
    content: "waooooooo",
    timestamp: new Date() };
const Comment2 = { author: author0,
    content: "wahhhh",
    timestamp: new Date() };
const Comment3 = { author: author0,
    content: "greta",
    timestamp: new Date() };
const Comment4 = { author: author1,
    content: "wauuu",
    timestamp: new Date() };
const Comment5 = { author: author1,
    content: "nice",
    timestamp: new Date() };
const Comment6 = { author: author2,
    content: "good",
    timestamp: new Date() };
;
const posts = [{ id: 1, title: "My School", content: "IMSB is my school",
        author: author0, comments: [Comment1] },
    { id: 2, title: "My bag", content: "chlo chlo isb chlo",
        author: author1, comments: [Comment4, Comment5, Comment6] },
    { id: 3, title: "My shoes", content: "My shoes are black",
        author: author2, comments: [Comment6, Comment4] }];
//
//
function sortPostsByComments(posts) {
    return posts.slice().sort(function (a, b) {
        if (a.comments.length > b.comments.length) {
            return -1;
        }
        else if (a.comments.length < b.comments.length) {
            return 1;
        }
        return 0;
    });
}
const sortedPosts = sortPostsByComments(posts);
sortedPosts.forEach(function (post, index) {
    console.log(`Post ${index + 1}: ${post.title} - ${post.comments.length} comments`);
});
export {};
//   function add(a:any,b:any):any{
// return a+b
//   }
//   let dsa=add(1,2)
// console.log(dsa);
