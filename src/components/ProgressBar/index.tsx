type TypeProps = {
  children: React.ReactNode;
  xpPoints?: number;
  xpToUpgrade?: number;
};

const ProgressBar = ({ children, ...props }: TypeProps) => {
  const progressPercent = (100 * props.xpPoints!) / props.xpToUpgrade!;
  return (
    <div className="grid bg-light-gray w-full lg:h-4 2xl:h-6 rounded-xl">
      <div
        className="bg-gradient-to-r from-dark-purple to-light-purple relative lg:h-4 2xl:h-6 rounded-xl"
        style={{ width: `${progressPercent}%` }}
      />
      {children}
    </div>
  );
};
export default ProgressBar;
