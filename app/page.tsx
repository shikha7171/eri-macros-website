import { Hero } from '@/components/home/hero'
//import { Marquee } from '@/components/marquee'
import {
  Intro,
  Pillars,
  FeatureSplit,
  HomeCta,
} from '@/components/home/sections'
import { RethinkingProtein } from '@/components/rethinkingProtein'
export default function HomePage() {
  return (
    <main>
      <Hero />

      
      <Intro />
      <RethinkingProtein />

      <Pillars />

      <FeatureSplit />

      {/* <HomeCta /> */}
    </main>
  )
}