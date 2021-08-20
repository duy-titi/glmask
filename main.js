
// settings:
const _spec = {
  maskURL: 'assets/VU298_Snowman_Mask.glb'
}

let _threeInstances = null;


function main(){
  // get the 2 canvas from the DOM:
  const canvasFace = document.getElementById('WebARRocksFaceCanvas');
  const canvasThree = document.getElementById('threeCanvas');

  // Init WebAR.rocks.face through the helper:
  WebARRocksFaceThreeHelper.init({
    spec:  {
      NNCPath: 'neuralNets/NN_GLASSES_6.json'
      /*,videoSettings: {
        idealWidth: 1280,
        idealHeight: 800
      }*/
    },
    solvePnPImgPointsLabels: [
      'leftEarBottom',
      'rightEarBottom',
      'noseBottom',
      'noseLeft', 'noseRight',
      'leftEyeExt',
      'rightEyeExt'
    ], //*/

    canvas: canvasFace,
    canvasThree: canvasThree,

    callbackReady: function(err, threeInstances){
      if (err){
        console.log('ERROR in main.js: ', err);
        return;
      }
      WebARRocksFaceThreeHelper.resize(window.innerWidth, window.innerHeight);
      
      // threeInstances are the THREE.js instances initialized by the helper
      // There are a THREE.Camera, a THREE.Scene and an object following the face
      build_scene(threeInstances);
    }
  }); //end WebARRocksFaceThreeHelper.init() 
}


function build_scene(threeInstances){
  _threeInstances = threeInstances;
  const threeLoadingManager = new THREE.LoadingManager();

  new THREE.GLTFLoader(threeLoadingManager).load(_spec.maskURL, function(gltf){
    _threeInstances.threeFaceFollowers[0].add(gltf.scene);
  });

  // add lighting:
  const pointLight = new THREE.PointLight(0xffffff, 2);
  _threeInstances.threeScene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  _threeInstances.threeScene.add(ambientLight);
}
