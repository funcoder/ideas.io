Template.ideaSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        
        var idea = {
            title: $(e.target).find('[name=title]').val(),
            details: $(e.target).find('[name=details]').val()
        };
        
        Meteor.call('ideaInsert', idea, function(error, result) {
            if (error) 
                return alert(error.reason);
            Router.go('/');    
        })
        
        
    }
})