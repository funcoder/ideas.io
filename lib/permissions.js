// checks that the userId specified owns the record
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}