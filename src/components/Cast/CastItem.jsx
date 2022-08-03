import PropTypes from 'prop-types';

export const CastItem = ({ name, character, img }) => {
  return (
    <>
      <li>
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/w500${img}`
              : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
          }
          alt=""
          width="200"
        />
        <p>{name}</p>
        <p>{character}</p>
      </li>
    </>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
