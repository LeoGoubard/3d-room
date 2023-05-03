import React from 'react';
import Spline from '@splinetool/react-spline';


const Home = () => {

  return (
    <div className="h-full">
        <div className="mt-20 w-1/6 hadow-lg p-2 rounded-r-full bg-gradient-to-r from-gray-700 via-gray-900 to-black after:border-amber-600">
          <div className="text-white text-center text-2xl font-extrabold">
            <h1 className="p-3">Spline <span>Room</span></h1>
          </div>
        </div>
        <div className="flex h-[30rem] justify-between m-4">
          <div className="h-auto w-auto flex flex-row">
            <div className=" flex-col justify-between m-3 space-y-5">
              <h1 className="font-bold text-2xl">3D Room with Game Controls</h1>
              <p className="w-64">Learn how to create a 3D scene in Spline with game interactions like moving, jumping, mouse events, and dark mode state.</p>
              <Spline scene="https://prod.spline.design/64vYuxGsTA-XNlX6/scene.splinecode" />

            </div>
            <div className="w-5/6">
            <Spline scene="https://prod.spline.design/5hftbc9FW0gnuhmx/scene.splinecode" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;