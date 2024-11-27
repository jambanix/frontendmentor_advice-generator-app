export const AdviceNumber = ({ id }) => {
  return (
    <p className="text-neon-green uppercase text-center tracking-[2.5px] font-semibold text-sm">
      {id ? <span>ADVICE #{id}</span> : <span>ADVICE</span>}
    </p>
  );
};
