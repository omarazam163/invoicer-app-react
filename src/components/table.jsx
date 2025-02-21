const table = ({description,amount,price,quantity}) => {
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
            <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default table