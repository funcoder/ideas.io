Template.ideaEdit.events({
    'click .delete': function(e) {
        e.preventDefault();
        console.log('Deleting idea');
        
        if (confirm("Delete this idea?")) {
            var currentIdeaId = this._id;
            var currentUser = Meteor.user;
            Meteor.call("removeIdea", currentIdeaId);
            Router.go('ideas');
        }
    },
    'submit form': function(e) {
        e.preventDefault();
        console.log('Update idea');
        
        var ideaId = this._id;
        var ideaProperties = {
            title: $(e.target).find('[name=title]').val(),
            details: $(e.target).find('[name=details]').val(),
            coolidea: $(e.target).find('[name=coolidea]').prop("checked")
        }
        
        Ideas.update(ideaId, {$set: ideaProperties}, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                Router.go('ideas');
            }
        });
    }
});