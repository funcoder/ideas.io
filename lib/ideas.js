Ideas = new Mongo.Collection('ideas');

Ideas.allow({
    insert: function(userId, idea) {
        return !! userId;
    },
    
    remove: function(userId, idea) {
        return ownsDocument(userId, idea);
    },
    
    update: function(userId, idea) {
        return ownsDocument(userId, idea);
    }
})

Meteor.methods({
    ideaInsert: function(postAttributes) {
        console.log('Adding idea');
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            details: String,
            coolidea: Boolean
        });
        var user = Meteor.user();
        var idea = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submotted: new Date()
        });
        console.log("Ideas for user " + idea.userId + "(coolidea=" + idea.coolidea + ")");
        var ideaId = Ideas.insert(idea);
        return {
            _id: ideaId
        };
    },
    removeIdea: function(id) {
        console.log("Remove idea");
        check(Meteor.userId(), String);
        Ideas.remove(id);
    }
});

