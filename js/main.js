const { createApp } = Vue;

createApp({

  data() {

    return {

      activeIndex: 0,

      going: true,

      goingForward: true,

      autoPlay: null,

      gamesTitles: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],

    };

  },

  created() {

    this.autoPlay = setInterval(()=> {

      this.stopGo();

      console.log("going", this.going);

    }, 3000);
    
  },

  methods: {

    goForward: function(){

      this.activeIndex < this.gamesTitles.length-1 ? this.activeIndex++ : this.activeIndex = 0

    },

    goBackward: function(){

      this.activeIndex > 0 ? this.activeIndex-- : this.activeIndex = this.gamesTitles.length-1

    },

    stopGo: function(){

      if (this.going === true) {
  
        if (this.goingForward) { 
        
          this.goForward();
  
        }
        else {
  
          this.goBackward();
  
        };
  
      };
      
    },

  },

}).mount("#app");