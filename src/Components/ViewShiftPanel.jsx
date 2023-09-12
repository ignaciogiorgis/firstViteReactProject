const ShiftPanel = ({ shifts }) => {
  return (
    <div>
      <h3 className="uppercase mb-8 text-xl">Shift Panel</h3>
      <div className="h-screen overflow-y-auto">
        {shifts.map((shift) => {
          const { name, lastName, phone, car, service, id } = shift || {}
          return (
            <div
              key={id}
              className="bg-amber-50 rounded-xl p-16 grid grid-cols-2 gap-4 mb-4 border shadow-lg"
            >
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
          )
        })}
      </div>
    </div>
  )
}

export default ShiftPanel
