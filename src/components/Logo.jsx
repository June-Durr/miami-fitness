const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gold-500 flex items-center justify-center">
        <span className="text-white font-bold text-xl">M</span>
      </div>
      <div className="ml-2">
        <span className="font-bold text-gray-800 text-lg">Miami</span>
        <span className="text-gold-500 text-lg font-light"> Fitness</span>
      </div>
    </a>
  );
};

export default Logo;
