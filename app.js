var app = new Vue({
    el: '#app',
    data: {
      player: '',
      started: false,
      health: 100,
      ended: false
    },
    methods: {
      start: function() {
        this.started = true;
      },
      punch: function() {
        this.health -= 10;
        if (this.health <= 0) {
          this.ended = true;
        }
      },
      restart: function() {
        this.health = 100;
        this.ended = false;
        this.started = false;
        this.player = '';
      }
    },
  })