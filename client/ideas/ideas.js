Template.ideas.helpers({
    ideas: function() {
        return Ideas.find();
    }
});

Template.ideas.events({
    'click .delete': function(e) {
        e.preventDefault();
        console.log('Deleting idea');
        
        if (confirm("Delete this idea?")) {
            var currentIdeaId = this._id;
            var currentUser = Meteor.user;
            Meteor.call("removeIdea", currentIdeaId);
            Router.go('ideas');
        }
    }
})
