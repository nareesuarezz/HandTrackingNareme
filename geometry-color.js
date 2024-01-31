AFRAME.registerComponent('geometry-color', {
    init: function () {
      var COLORS = ['yellow', 'red', 'green', 'blue', 'orange'];
      var el = this.el;
  
      el.addEventListener('click', function () {
        var randomIndex = Math.floor(Math.random() * COLORS.length);
        var newColor = COLORS[randomIndex];
  
        var box = document.querySelector('#boxGeometry');
        var torus = document.querySelector('#torusGeometry');
        var sphere = document.querySelector('#sphereGeometry');
  
        box.setAttribute('material', 'color', newColor);
        torus.setAttribute('material', 'color', newColor);
        sphere.setAttribute('material', 'color', newColor);
      });
    }
  });
  