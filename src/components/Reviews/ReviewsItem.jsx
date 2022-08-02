export const ReviewsItem = ({ name, text }) => {
  return (
    <>
      <li>
        <h3>Author: {name}</h3>
        <p>{text}</p>
      </li>
    </>
  );
};
