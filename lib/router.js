Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { 
        var userId = Meteor.userId();
        return Meteor.subscribe('ideas', userId); 
    
    }
});

Router.map(function() {
   this.route('home', {path: '/'});
   this.route('ideas', {path: '/ideas'})
   this.route('ideaSubmit', {path: '/submit'})
   this.route('ideaEdit', {
        path: '/ideas/:_id/edit', 
        data: function() { return Ideas.findOne(this.params._id) } 
   })
});

var requireLogin = function() {
    if (! Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: 'ideaSubmit'});
Router.onBeforeAction(requireLogin, {only: 'ideas'});