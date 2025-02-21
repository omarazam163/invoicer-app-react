

const ClientDetail = ({clientName, clientAddress}) => {
  return (
    <section className="mt-5">
      <h2 className="text-xl uppercase">{clientName}</h2>
      <p>{clientAddress}</p>
    </section>
  );
}

export default ClientDetail