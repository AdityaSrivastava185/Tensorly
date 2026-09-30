import React from 'react'
import Hero from './Hero'
import AllProducts from './AllProducts'
import AutonomousWork from './AutonomousWork/AutonomousWork'
import Support from './Support'
import AIPrivacy from './AIPrivacy'
import Deploy from './Deploy'

const Main = () => {
  return (
    <div>
      <Hero/>
      <AllProducts/>
      <AutonomousWork/>
      <Support/>
      <AIPrivacy/>
      <Deploy/>
    </div>
  )
}

export default Main
