"use client"
import { useEffect, useState } from "react"
import Accreditations from "../Components/Accreditations"
import HomeSlider from "../Components/HomeSlider"
import Product from "../Components/Product"
import OurClient from "../Components/OurClient"
import StickSocialIcon from "../Components/StickySocialIcon"


export default function Home() {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <>
      <StickSocialIcon />
      <HomeSlider />
      <Product />
      <Accreditations />
      <OurClient />

    </>
  )
}
