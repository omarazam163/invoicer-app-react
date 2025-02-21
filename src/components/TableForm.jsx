const TableForm = ({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount,calcAmout }) => {
  return (
    <>
      <div className="w-full mb-4 mt-10">
        <label htmlFor="description">description</label>
        <input
          className="w-full"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="w-full md:grid grid-cols-3 gap-10">
        <div className="w-full">
          <label htmlFor="quantity">quantity</label>
          <input
            className="w-full"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => {setQuantity(e.target.value);calcAmout(price, e.target.value);}}
          ></input>
        </div>

        <div className="w-full">
          <label htmlFor="price">price</label>
          <input
            className="w-full"
            type="number"
            id="price"
            value={price}
            onChange={(e) => {setPrice(e.target.value), calcAmout(e.target.value, quantity);}}
          ></input>
        </div>

        <div className="w-full">
          <label htmlFor="amount">amount</label>
          <input
            className="w-full"
            type="text"
            id="amount"
            value={amount}
            readOnly="true"
          ></input>
        </div>
      </div>
    </>
  );
};

export default TableForm