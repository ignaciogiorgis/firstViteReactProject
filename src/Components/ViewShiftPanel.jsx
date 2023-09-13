const ShiftPanel = ({ shifts, setShift, deleteShift }) => {
  return (
    <div>
      <h3 className="uppercase mb-8 text-xl">Shift Panel</h3>
      <div className="h-screen overflow-y-auto">
        {shifts.map((element) => {
          const { name, lastName, phone, car, service, id } = element || {}
          const handleDeleteShift = () => {
            const resp = confirm(
              "Are you sure you want to eliminate the shift?"
            )

            if (resp) {
              deleteShift(id)
            }
          }
          return (
            <div
              key={id}
              className="bg-amber-50 rounded-xl p-16  mb-4 border shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-left">
                    Name: <span className="font-bold">{name}</span>
                  </p>
                  <hr />
                </div>
                <div>
                  <p className="text-left">
                    LastName : <span className="font-bold">{lastName}</span>
                  </p>
                  <hr />
                </div>
                <div>
                  <p className="text-left">
                    phone : <span className="font-bold">{phone}</span>
                  </p>
                  <hr />
                </div>
                <div>
                  <p className="text-left">
                    car : <span className="font-bold">{car}</span>
                  </p>
                  <hr />
                </div>
                <div>
                  <p className="text-left">
                    service : <span className="font-bold">{service}</span>
                  </p>
                  <hr />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-slate-600 px-8 py-2 text-gray-50 rounded-lg hover:bg-slate-900"
                  type="button"
                  onClick={() => setShift(element)}
                >
                  edit
                </button>
                <button
                  className="bg-red-600 px-8 py-2 text-gray-50 rounded-lg hover:bg-red-900"
                  type="button"
                  onClick={handleDeleteShift}
                >
                  delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShiftPanel
