const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <article className="flex flex-col items-end justify-end">
      <ul>
        <li>
          <span className="font-bold">Invoicer Number:</span>
          {invoiceNumber}
        </li>
        <li>
          <span className="font-bold">invoicer Date:</span>
          {invoiceDate}
        </li>
        <li>
          <span className="font-bold">Due Date:</span>
          {dueDate}
        </li>
      </ul>
    </article>
  );
}

export default Dates