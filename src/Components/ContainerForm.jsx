import React, { useState } from "react"
import ViewForm from "./ViewForm"

const ContainerForm = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [car, setCar] = useState("")
  const [service, setService] = useState("")
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if ([name, lastName, phone, car, service].includes("")) {
      setError(true)
    } else {
      setError(false)
    }
  }
  return (
    <div>
      <ViewForm
        handleSubmit={handleSubmit}
        name={name}
        lastName={lastName}
        phone={phone}
        car={car}
        service={service}
        setName={setName}
        setLastName={setLastName}
        setPhone={setPhone}
        setCar={setCar}
        setService={setService}
        error={error}
      />
    </div>
  )
}

export default ContainerForm
