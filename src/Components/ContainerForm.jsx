import React, { useEffect } from "react"
import { useState } from "react"
import ViewForm from "./Form"

export const ContainerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <ViewForm />
    </div>
  )
}
