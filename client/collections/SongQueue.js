// SongQueue.js - Defines a backbone model class for the song queue.
// SongQueue is a COLLECTION
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {   
    if(this.at(0) === song){
      this.playNext(song);
    } else {
      this.remove(song);
    }
    
  },

  playNext: function(song){
    this.remove(song);
    if (this.length === 0) {
      this.trigger('stop', this);
    } else {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});