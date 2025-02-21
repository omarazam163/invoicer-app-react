import Notes from "./components/notes.jsx";
import Footer from "./components/footer.jsx";
import Table from "./components/table.jsx";
import Header from "./components/header.jsx"
import ClientDetail from "./components/ClientDetail.jsx";
import MainDetil from "./components/mainDetail.jsx";
import Dates from "./components/Dates.jsx";
import { useState } from "react";
import TableForm from "./components/TableForm.jsx";
function App() {
  const [showInovoice, setShowInvoice] = useState(false);
  const handlePrint = () => {
        window.print();
      };
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Main st, Anytown, USA");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [bankName, setBankName] = useState("Bank of Anytown");
  const [bankAccount, setBankAccount] = useState("1234567890");
  const [website, setWebsite] = useState("www.example.com");
  const [clientName, setClientName] = useState("Jane Doe");
  const [clientAddress, setClientAddress] = useState("456 Other st, Othertown, USA");
  const [invoiceNumber, setInvoiceNumber] = useState("001");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0]);
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("Please make the payment by the due date, thank you!");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const calcAmout = (quantity, price) => {
    setAmount((parseInt(price) * parseInt(quantity))||0);
  };
  return (
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {showInovoice ? (
        <div>
          <Header handlePrint={handlePrint}></Header>
          <MainDetil details={{ name, address, email }}></MainDetil>
          <ClientDetail
            clientName={clientName}
            clientAddress={clientAddress}
          ></ClientDetail>
          <Dates
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            dueDate={dueDate}
          ></Dates>
          <Table 
          list={list}
          setList={setList}
          ></Table>
          <Notes notes={notes}></Notes>
          <Footer
            name={name}
            address={address}
            website={website}
            email={email}
            phone={phone}
            bankAccount={bankAccount}
            bankName={bankName}
          ></Footer>
          <button
            className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            onClick={() => setShowInvoice(false)}
          >
            Edit Info
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="w-full md:grid grid-cols-2 gap-3 mb-5">
              <div className="w-full">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="address">Enter Your Address</label>
                <input
                  className="w-full"
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="w-full md:grid grid-cols-3 gap-10 mb-5">
              <div className="w-full">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  className="w-full"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="website">Enter Your Website</label>
                <input
                  className="w-full"
                  type="url"
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="phone">Enter Your Phone</label>
                <input
                  className="w-full"
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full md:grid grid-cols-2 gap-10 mb-5">
              <div className="w-full">
                <label htmlFor="bankName">Enter Your Bank Name</label>
                <input
                  className="w-full"
                  type="text"
                  id="bankName"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="bankAccount">Enter Your Bank Account</label>
                <input
                  className="w-full"
                  type="text"
                  id="bankAccount"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full md:grid grid-cols-2 gap-10 md:mt-20">
              <div className="w-full">
                <label htmlFor="clientName">Enter Your Client Name</label>
                <input
                  className="w-full"
                  type="text"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="clientAddress">Enter Your Client Address</label>
                <input
                  className="w-full"
                  type="text"
                  id="clientAddress"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="w-full md:grid grid-cols-3 gap-10">
              <div className="w-full">
                <label htmlFor="invoiceNumber">Enter Your Invoice Number</label>
                <input
                  className="w-full"
                  type="text"
                  id="invoiceNumber"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="invoiceDate">Enter Your Invoice Date</label>
                <input
                  className="w-full"
                  type="date"
                  id="invoiceDate"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                ></input>
              </div>

              <div className="w-full">
                <label htmlFor="dueDate">Enter Your Due Date</label>
                <input
                  className="w-full"
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full">
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                calcAmout={calcAmout}
                list={list}
                setList={setList}
              ></TableForm>
            </div>
            <div className="w-full">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes"
                className="w-full"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
              onClick={() => setShowInvoice(true)}

            >
              Privew Invoice
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App
