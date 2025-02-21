import PropTypes from "prop-types";

const MainDetil = ({ details }) => {
  return (
    <section className="flex flex-col items-end justify-end">
      <p className="text-xl uppercase font-bold">{details.name}</p>
      <p>{details.address}</p>
    </section>
  );
};

MainDetil.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainDetil;
