 
# Generation of VU298_Snowman_Mask.glb


* Import `VU298_Snowman_Mask.fbx` on Blender
* Import `face0.obj` on Blender (provided with *WebAR.rocks.face*)
* Align, scale and rotate the mask mesh to fit `face0.obj`
* Apply all visual transforms to the mask mesh
* Select the mask mesh, go to *EDIT* mode, then *Faces/Triangulate faces*
* Select it and export it as GLTF (export selection only)