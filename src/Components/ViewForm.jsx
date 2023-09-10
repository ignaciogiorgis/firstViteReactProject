import Error from "./Error"

const Form = ({ handleSubmit, dataForm, handleDataForm, error }) => {
  const { name, lastName, car, phone, service } = dataForm
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-center text-xl mb-8 uppercase">Entry Form</h2>
        <div className="bg-amber-50 rounded-xl p-20">
          <form action="" onSubmit={handleSubmit}>
            {error && <Error />}
            <div className="flex flex-col py-2">
              <label className="text-left" htmlFor="">
                Name
              </label>
              <input
                className="rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 placeholder:p-2"
                type="text"
                id="name"
                placeholder="enter your name"
                value={name}
                onChange={(e) => handleDataForm(e)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-left" htmlFor="">
                Lastname
              </label>
              <input
                className="rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 placeholder:p-2"
                type="text"
                id="lastName"
                placeholder="enter your lastname"
                value={lastName}
                onChange={(e) => handleDataForm(e)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-left" htmlFor="">
                Phone
              </label>
              <input
                className="rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 placeholder:p-2"
                type="number"
                id="phone"
                placeholder="enter your phone"
                value={phone}
                onChange={(e) => handleDataForm(e)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-left" htmlFor="">
                Car
              </label>
              <input
                className="rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 placeholder:p-2"
                type="text"
                id="car"
                placeholder="enter your car type"
                value={car}
                onChange={(e) => handleDataForm(e)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-left" htmlFor="">
                Service
              </label>
              <input
                className="rounded-md  border-2 border-solid border-zinc-400 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 placeholder:p-2"
                type="text"
                id="service"
                placeholder="enter your service type"
                value={service}
                onChange={(e) => handleDataForm(e)}
              />
            </div>
            <div>
              <input
                className="rounded-md p-2 mt-6 border-2 border-solid  border-gray-800 hover:border-solid focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer placeholder:p-2"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
