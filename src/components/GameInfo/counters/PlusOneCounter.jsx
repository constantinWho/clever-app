const PlusOneCounter = ({ plusOne }) => {
  const { input } = plusOne;
  return (
    <div className="plus-one">
      <p className="bonus">+1</p>
      {input.map((i) => (
        <button className="input" key={i.key}></button>
      ))}
    </div>
  );
};

export default PlusOneCounter;
