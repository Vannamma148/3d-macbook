import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mac } from "./Mac";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="navbar flex gap-9 py-4 absolute top-0 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display]">
    {
      ["Store", "Mac", "IPad", "IPhone", "Watch", "AirPods", "TV & Home"].map((e)=>(
        <a href="" className="text-white font-[500] text-sm">{e}</a>
      ))
    }
        </div>
        <div className="absolute flex flex-col items-center top-1/2 -translate-x-1/2 left-1/2 top-20  text-white">
          <h3 className="lightup-text text-5xl tracking-tight font-[700]">MacBook Pro</h3>
          <h5 className="tracking-tight font-[600] text-2xl mt-4 text-white/45">Built For Apple Intelligence.</h5>
          
          <p className="text-center tracking-tight font-[500] mt-4 w-99 text-white/80">Experience the ultimate performance, stunning display, and sleek design of the MacBook Pro. </p>

        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 120] }}>
          {/* drei OrbitControls */}
          {/* <OrbitControls /> */}
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_02_4k.exr",
            ]}
          />
          {/* drei OrbitControls */}
          <ScrollControls pages={4}>
            <Mac />
          </ScrollControls>

          {/* <mesh>
          <boxGeometry />
        </mesh> */}
        </Canvas>
      </div>
    </>
  );
}

export default App;
