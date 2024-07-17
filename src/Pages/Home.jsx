import { Header } from "../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { Room } from "../components/Room";
import { Suspense, useState } from "react";
import {
  PerspectiveCamera,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Menu } from "../components/Menu/Menu";
import style from "./home.module.css";
import { PerspectiveMenu } from "../components/PerspectiveMenu/PerspectiveMenu";
import { Floor } from "../components/Floor/Floor";

export const Home = () => {
  const [menu, setMenu] = useState("textures");
  return (
    <>
      <div className={style.content}>
        <Header />
        <Menu menu={menu} setMenu={setMenu} />
        <PerspectiveMenu />
        <Floor />
      </div>
      <div className={style.container}>
        <Canvas>
          <OrbitControls />
          <PerspectiveCamera
            far={15000}
            makeDefault
            position={[1000, 1000, 1000]}
          />
          <OrthographicCamera zoom={100} left={20} bottom={-1000} />

          <Suspense>
            <Room />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
