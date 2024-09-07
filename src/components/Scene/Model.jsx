// // import React, { useRef } from "react";
// // import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// // import { useFrame, useThree } from "@react-three/fiber";
// // import { useControls } from "leva";

// // export default function Model() {
// //   const { nodes } = useGLTF("/medias/torrus.glb");
// //   const { viewport } = useThree();
// //   const torus = useRef(null);

// //   useFrame(() => {
// //     torus.current.rotation.x += 0.02;
// //   });

// //   const materialProps = useControls({
// //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
// //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
// //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
// //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
// //     chromaticAberration: { value: 0.02, min: 0, max: 1 },
// //     backside: { value: true },
// //   });

// //   return (
// //     <group scale={viewport.width / 3.75}>
// //       <Text
// //         position={[0, 0, -1]}
// //         fontSize={0.5}
// //         color="white"
// //         anchorX="center"
// //         anchorY="middle"
// //       >
// //         Mahtab-Tech
// //       </Text>
// //       <mesh ref={torus} {...nodes.Torus002}>
// //         <MeshTransmissionMaterial {...materialProps} />
// //       </mesh>
// //     </group>
// //   );
// // }

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport } = useThree();
//   const torus = useRef(null);

//   useFrame(() => {
//     torus.current.rotation.x += 0.02;
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <Text
//         position={[0, 0, -1]}
//         fontSize={0.8}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//     </group>
//   );
// }

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport, mouse } = useThree();
//   const torus = useRef(null);

//   useFrame(() => {
//     torus.current.rotation.x += 0.02;

//     const movementFactor = 0.007;
//     const targetX = mouse.x * movementFactor * viewport.width;

//     const targetY = mouse.y * movementFactor * viewport.height;

//     torus.current.position.x = targetX;
//     torus.current.position.y = targetY;
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <Text
//         position={[0, 0, 0]}
//         fontSize={0.4}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//     </group>
//   );
// }

import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport, mouse } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;

    // const movementFactor = 0.007;
    // const targetX = mouse.x * movementFactor * viewport.width;
    // const targetY = mouse.y * movementFactor * viewport.height;

    // torus.current.position.x = targetX;
    // torus.current.position.y = targetY;
  });

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  };

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        Mahtab-Tech
      </Text>
      <mesh ref={torus} {...nodes.Torus002} scale={[1, 1, 1]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport, mouse } = useThree();
//   const torus = useRef(null);
//   const text = useRef(null);

//   useFrame(() => {
//     torus.current.rotation.x += 0.02;

//     const movementFactor = 0.007;
//     const targetX = mouse.x * movementFactor * viewport.width;
//     const targetY = mouse.y * movementFactor * viewport.height;

//     torus.current.position.x = targetX;
//     torus.current.position.y = targetY;

//     // Keep the text centered on the torus
//     text.current.position.x = targetX;
//     text.current.position.y = targetY;
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//       <Text
//         ref={text}
//         position={[0, 0, 0]} // Centered on the torus
//         fontSize={0.8}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//     </group>
//   );
// }

//laxt

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { Vector3 } from "three";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport, mouse } = useThree();
//   const torus = useRef(null);

//   // Store the original scale and a reference to the current scale
//   const originalScale = useRef(new Vector3(1, 1, 1));
//   const currentScale = useRef(new Vector3(1, 1, 1));

//   useFrame(() => {
//     // Rotate the torus
//     torus.current.rotation.x += 0.02;

//     // Calculate distance from the center of the screen (0, 0)
//     const distance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);

//     // Distort the torus shape when the mouse is close
//     const distortionFactor = 1 - distance * 0.1;
//     currentScale.current.set(
//       originalScale.current.x * distortionFactor,
//       originalScale.current.y * distortionFactor,
//       originalScale.current.z * distortionFactor
//     );

//     // Elastic return effect when mouse moves away
//     const elasticFactor = 0.1; // Controls how elastic the return effect is
//     torus.current.scale.lerp(currentScale.current, elasticFactor);

//     // Add a slight bounce-back effect
//     torus.current.scale.x += Math.sin(distance * 5) * 0.04;
//     torus.current.scale.y += Math.sin(distance * 5) * 0.04;
//     torus.current.scale.z += Math.sin(distance * 5) * 0.04;
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <Text
//         position={[0, 0, -1]}
//         fontSize={0.8}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//     </group>
//   );
// }

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { Vector3 } from "three";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport, mouse } = useThree();
//   const torus = useRef(null);

//   // Store the original scale
//   const originalScale = new Vector3(1, 1, 1);

//   useFrame(() => {
//     // Rotate the torus
//     torus.current.rotation.x += 0.02;

//     // Calculate the stretch factor based on the mouse's distance from the center
//     const stretchFactorX = 1 + mouse.x * 0.2; // Adjust 0.2 to control the stretch intensity
//     const stretchFactorY = 1 + mouse.y * 0.2;

//     // Apply stretching
//     torus.current.scale.x = originalScale.x * stretchFactorX;
//     torus.current.scale.y = originalScale.y * stretchFactorY;

//     // Elastic return to original scale
//     const elasticFactor = 0.1; // Controls how elastic the return effect is
//     torus.current.scale.lerp(originalScale, elasticFactor);
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <Text
//         position={[0, 0, -1]}
//         fontSize={0.8}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//     </group>
//   );
// }

// import React, { useRef } from "react";
// import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { Vector3 } from "three";

// export default function Model() {
//   const { nodes } = useGLTF("/medias/torrus.glb");
//   const { viewport, mouse } = useThree();
//   const torus = useRef(null);

//   // Store the original scale and the target scale
//   const originalScale = new Vector3(1, 1, 1);
//   const targetScale = useRef(new Vector3(2, 2, 2));
//   const elasticity = 0.4; // Controls how elastic the return effect is

//   useFrame(() => {
//     // Rotate the torus
//     torus.current.rotation.x += 0.02;

//     // Calculate distance from the center (0,0)
//     const distanceX = (mouse.x * viewport.width) / 2; // Mouse distance in X direction
//     const distanceY = (mouse.y * viewport.height) / 2; // Mouse distance in Y direction

//     // Calculate the distortion amount based on distance
//     const maxDistortion = 0.4; // Maximum amount of distortion
//     const stretchX = Math.min(maxDistortion, Math.abs(distanceX) * 0.1); // Stretch in X direction
//     const stretchY = Math.min(maxDistortion, Math.abs(distanceY) * 0.1); // Stretch in Y direction

//     // Set the target scale based on the mouse position
//     targetScale.current.set(
//       originalScale.x + stretchX * (distanceX > 0 ? 0.4 : -1),
//       originalScale.y + stretchY * (distanceY > 0 ? 0.4 : -1),
//       originalScale.z
//     );

//     // Apply the elastic effect
//     torus.current.scale.lerp(targetScale.current, elasticity);
//   });

//   const materialProps = {
//     thickness: 0.2,
//     roughness: 0,
//     transmission: 1,
//     ior: 1.2,
//     chromaticAberration: 0.02,
//     backside: true,
//   };

//   return (
//     <group scale={viewport.width / 3.75}>
//       <Text
//         position={[0, 0, -1]}
//         fontSize={0.8}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Mahtab-Tech
//       </Text>
//       <mesh ref={torus} {...nodes.Torus002}>
//         <MeshTransmissionMaterial {...materialProps} />
//       </mesh>
//     </group>
//   );
// }
