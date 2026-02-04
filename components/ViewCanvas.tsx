"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Rig from "./Rig";
import LoadingSkeleton from "./LoadingSkeleton";
import { patchThreeLoadingManager } from "@/lib/patchThreeLoadingManager";
import AssetsPreload from "./AssetsPreload";

const ViewCanvas = () => {
  const eventSource =
    typeof document !== "undefined" ? document.body : undefined;

  useEffect(() => {
    patchThreeLoadingManager();
  }, []);

  return (
    <Canvas
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
      camera={{ position: [0, 0.7, 3], fov: 30 }}
      eventSource={eventSource}
      eventPrefix="client"
      gl={{ stencil: true }}
    >
      <AssetsPreload />

      <Suspense fallback={<LoadingSkeleton />}>
        <View.Port />
      </Suspense>

      <Rig />
    </Canvas>
  );
};

export default ViewCanvas;
