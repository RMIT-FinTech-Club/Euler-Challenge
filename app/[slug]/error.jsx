'use client'

import { redirect } from "next/navigation"
import Boundary from "../component/boundary"
import Button from "../component/button"

 
export default function Error({ error, reset }) {
  const goHome = () => {
    redirect('/question1');
  }

  return (
    <Boundary label={"Error"}>
      <h2 className="pb-3">Something went wrong!</h2>
      <Button onClick={goHome}>Go to Home</Button>
    </Boundary>
  )
}