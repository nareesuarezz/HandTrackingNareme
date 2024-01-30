AFRAME.registerComponent('teleport-controls', {
  init: function () {
    this.el.addEventListener('pinchstart', this.onPinchStart.bind(this));
    this.el.addEventListener('pinchend', this.onPinchEnd.bind(this));
    
    this.el.addEventListener('pointingstart', this.onPointingStart.bind(this));
    this.el.addEventListener('pointingend', this.onPointingEnd.bind(this));
  },

  onPinchStart: function () {
    // Obtener la posición de la mano que hace pinch
    const pinchPosition = this.el.components['hand-interaction'].getPinchPosition();

    // Calcular la posición de destino para el teletransporte
    const destinationPosition = new THREE.Vector3();
    destinationPosition.copy(pinchPosition);  // Copiar la posición de pinch

    // Puedes ajustar la posición de destino según tus necesidades
    destinationPosition.y = 0;  // Ajustar la altura (si es necesario)

    // Teletransportar la cámara a la posición de destino
    this.el.sceneEl.camera.el.setAttribute('position', destinationPosition);
  },

  onPinchEnd: function () {
    // Lógica de finalización del gesto de pinch (si es necesario)
  },

  onPointingStart: function () {
    // Obtener la posición de la mano que apunta con el dedo
    const pointingPosition = this.el.components['hand-interaction'].getPointingPosition();

    // Calcular la posición de destino para el teletransporte
    const destinationPosition = new THREE.Vector3();
    destinationPosition.copy(pointingPosition);  // Copiar la posición de apuntar

    // Puedes ajustar la posición de destino según tus necesidades
    destinationPosition.y = 0;  // Ajustar la altura (si es necesario)

    // Teletransportar la cámara a la posición de destino
    this.el.sceneEl.camera.el.setAttribute('position', destinationPosition);
  },


});
