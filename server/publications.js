Meteor.publish('ideas', function(userId) {
    console.log("Find ideas for user " + userId);
    return Ideas.find({userId: userId});
});