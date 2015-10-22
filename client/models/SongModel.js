// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {

  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // This song's songModel is listening for a 'play' event happening in LibraryEntryView
    this.trigger('play', this);
  },
  enqueue: function() {   
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  }
  

});

// trigger > object.trigger(event, [*args]);
