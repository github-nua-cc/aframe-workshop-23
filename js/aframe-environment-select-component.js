AFRAME.registerComponent('environment-select', {
    schema: {
      preset: { type: 'string' }
    },
    init: function () {
    var data = this.data;
      var el = this.el;
      var material = el.getAttribute('material');
      var initialColor = material.color;
      var self = this;

      el.addEventListener('mousedown', function (evt) {
        el.setAttribute('material', 'color', '#fb74e9');
     //   proxy.emit('fade-up')
         document.querySelector('a-scene').setAttribute('environment', 'preset:'+data.preset)
      });

      el.addEventListener('mouseup', function (evt) {
        el.setAttribute('material', 'color', self.isMouseEnter ? '#84cce7' : initialColor);
      //  proxy.emit('fade-down')
      });

      el.addEventListener('mouseenter', function () {
        el.setAttribute('material', 'color', '#84cce7');
        self.isMouseEnter = true;

      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('material', 'color', initialColor);
        self.isMouseEnter = false;
        // proxy.emit('fade-down')
      });
    }
  });