# Hand Tracking Nareme

I made a Hand Tracking project with A-Frame using as a base the example handtracking project from A-Frame

**I made some changes in the project, I added a function which allows you to grab the selected figure, and 
I also added a Change Color button, which as it says, it changes de figure color in a random order between 
5 different colors (blue, yellow, green, orange and red) also changed the colors of the buttons to make it more original**

here you have some of the code that made my project different from the example:

**Here, the feature that makes the geometry grabbable for the user**
```sh
<a-scene environment info-message="htmlSrc: #messageText" teleport-controls>
    <a-assets>
      <a-asset-item id="messageText" src="message.html"></a-asset-item>
    </a-assets>
    <a-entity id="boxGeometry" position="0 2.0 -1" rotation="45 45 0"
      geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6" material="color: #ff4b5c" size-change
      scale="0.5 0.5 0.5" grabbable></a-entity>

    <a-entity id="torusGeometry" position="0 2.0 -1" rotation="45 45 0"
      geometry="primitive: torus; radius: 0.4; radius-tubular: 0.06" material="color: #d2e603" size-change
      visible="false" scale="0.5 0.5 0.5" grabbable></a-entity>

    <a-entity id="sphereGeometry" position="0 2.0 -1" rotation="45 45 0" geometry="primitive: sphere; radius: 0.6;"
      material="color: #fcdab7" size-change visible="false" scale="0.5 0.5 0.5" grabbable></a-entity>

```
**Here, the option to change the color of the geometry**
```sh
      <script src="geometry-color.js"></script>
      <a-entity id="colorChangeButton" button="label: Change Geometry Color;  width: 0.40" position="0 -0.16 0" geometry-color></a-entity>
```

**Here, the file of the change color feature:**
```sh
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
```

Below, I let you a screenshot of how the project looks like:
![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/805e986c-1e6f-47a8-8951-7fbc9def0d70)

