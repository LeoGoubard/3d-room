import React from 'react';
import Spline from '@splinetool/react-spline';


const Home = () => {

  return (
    <div className="h-full text-[#666666]">
        <div className="mt-20 w-1/6 hadow-lg p-2">
          <div className="text-center text-2xl font-extrabold">
            <h1 className="p-3 font-extrabold text-3xl">Spline <span className="">Room</span></h1>
          </div>
        </div>
        <div className="flex h-[30rem] justify-between m-4">
          <div className="h-auto w-auto flex flex-row">
            <div className=" flex-col justify-between m-3 w-2/6">
              <h1 className="font-bold text-2xl">3D Room with Game Controls</h1>
              <p className="w-64">Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse events, and some interactions in the room.</p>
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