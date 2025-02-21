const table = ({list,setList}) => {
  return (
    <>
      <table className="w-full mt-5">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Item Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>

            {list.map((item) => {
    return (
      <tr key={Math.random}>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.amount}</td>
      </tr>
    );})}
        </tbody>
      </table>
    </>
  );
}

export default table