![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/ac2a0a4a-f1d5-4d91-bf25-ecc8d1d5b36c)# Hand Tracking Nareme

I made a Hand Tracking project with A-Frame using as a base the example handtracking project from A-Frame

**I made some changes in the project, I added a function which allows you to grab the selected figure, and 
I also added a Change Color button, which as it says, it changes de figure color in a random order between 
5 different colors (blue, yellow, green, orange and red) also changed the colors of the buttons to make it more original**

here you have some of the code that made my project different from the example:

**Here, the feature that makes the geometry grabbable for the user**
```sh
// Insert the GRABBABLE label on each geometry
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
    // Import the geometry color component and implement it into a button
      <script src="geometry-color.js"></script>
      <a-entity id="colorChangeButton" button="label: Change Geometry Color;  width: 0.40" position="0 -0.16 0" geometry-color></a-entity> 
```

**Here, the file of the change color feature:**
```sh
AFRAME.registerComponent('geometry-color', {
    // The 'init' function runs when the component is initialized
    init: function () {
      // Define an array of colors
      var COLORS = ['yellow', 'red', 'green', 'blue', 'orange']; 
      // Store a reference to the element that the component was added to
      var el = this.el;
  
      // Add a click event to the element
      el.addEventListener('click', function () {
        // Generate a random index to select a color from the array
        var randomIndex = Math.floor(Math.random() * COLORS.length);
        // Select a random color from the array
        var newColor = COLORS[randomIndex];
  
        // Find the elements with the IDs 'boxGeometry', 'torusGeometry', and 'sphereGeometry'
        var box = document.querySelector('#boxGeometry');
        var torus = document.querySelector('#torusGeometry');
        var sphere = document.querySelector('#sphereGeometry');
  
        // Change the color of the selected elements to the random color
        box.setAttribute('material', 'color', newColor);
        torus.setAttribute('material', 'color', newColor);
        sphere.setAttribute('material', 'color', newColor);
      });
    }
  });

```

Below, I let you a screenshot of how the project looks like:

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/805e986c-1e6f-47a8-8951-7fbc9def0d70)

Here, how it looks if you press the CUBE button:

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/46429ccf-491f-43a6-b4ea-176feb2dee9d)

Here, how it looks if you press the BALL button:

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/c9eb449b-db94-42ae-be23-3ec37bc5c2e5)

Here, how it looks if you press the TORU button:

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/0ac379fe-99a6-47ea-bc72-64c101f7b676)

Here, how it looks if you press the DARK MODE button:

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/011cf597-3fbc-4434-b8a6-1e4de56776f6)

And finally, here you have all the examples of different colours what a geometry can have (the colours change randomly):

### ORANGE: 

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/32124418-71c7-4d26-aa26-c404935364c8)

### RED: 

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/913b60d8-0dc3-4348-a0ec-47ac4f1d9041)

### YELLOW: 

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/5dc61c0b-6775-4d77-bab1-0b86299b8649)

### BLUE: 

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/8f924cb1-3d73-4762-8383-8196b0f3f066)

### GREEN: 

![imagen](https://github.com/nareesuarezz/HandTrackingNareme/assets/131177598/2b60120c-b31c-4809-ac02-c03266704c26)





