// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {

  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {   
    app.get('songQueue').add(this);
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
