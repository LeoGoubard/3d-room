import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="h-full text-[#666666] flex justify-center m-20 text-center flex-col">
        <div className="flex h-[60vh] m-4">
          <div className="h-auto w-auto flex flex-row justify-center">
            <div className=" flex-col justify-between m-3 w-2/6">
              <h1 className="font-extrabold text-3xl">Spline Room</h1>
              <h1 className="font-bold text-2xl">3D Room with Game Controls</h1>
              <p className="">Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse events, and some interactions in the room.</p>
              <Spline scene="https://prod.spline.design/64vYuxGsTA-XNlX6/scene.splinecode" />
            </div>
            <div className="w-4/6">
              <Spline scene="https://prod.spline.design/5hftbc9FW0gnuhmx/scene.splinecode" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;