/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
    schema: {
      on: {type: 'string'},
      target: {type: 'selector'},
      src: {type: 'string'},
      dur: {type: 'number', default: 300}
    },
  
    init: function () {
      var data = this.data;
      var el = this.el;
      //alert("  lll");
      this.setupFadeAnimation();

      el.addEventListener(data.on, function () {
        // Fade out image.
        data.target.emit('set-image-fade');
        //alert("  lll");
        // Wait for fade to complete.
        // this.el.setLink();
        setTimeout(function () {
          // Set image.
          data.target.setAttribute('material', 'src', data.src);
         console.log('src');
      // var targetEl4 = document.querySelector('#firstlink');
      // targetEl4.setAttribute('visible', 'src', false);
		 
        }, data.dur);
      });
    },

   

    setLink: function () {
      var targetEl4 = document.querySelector('#firstlink');
      targetEl4.setAttribute('visible', 'src', false);
      alert("dddd");
    },
   
    /**
     * Setup fade-in + fade-out.
     */
    setupFadeAnimation: function () {
      var data = this.data;
      var targetEl = this.data.target;

      
  
      // Only set up once.
      if (targetEl.dataset.setImageFadeSetup) { return; }
      targetEl.dataset.setImageFadeSetup = true;
  
      // Create animation.
      targetEl.setAttribute('animation__fade', {
        property: 'material.color',
        startEvents: 'set-image-fade',
        dir: 'alternate',
        dur: data.dur,
        from: '#FFF',
        to: '#000'
      });
    }
  });